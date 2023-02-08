//go:build !windows

package runner

import (
	"context"
	"io"
	"net"
	"testing"
	"time"

	runnerv1 "github.com/stateful/runme/internal/gen/proto/go/runme/runner/v1"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/test/bufconn"
	"google.golang.org/protobuf/proto"
)

func testCreateLogger(t *testing.T) *zap.Logger {
	logger, err := zap.NewDevelopment()
	require.NoError(t, err)
	t.Cleanup(func() { _ = logger.Sync() })
	return logger
}

func Test_executeCmd(t *testing.T) {
	cmd, err := newCommand(
		&commandConfig{
			ProgramName: "bash",
			IsShell:     true,
			Commands:    []string{"echo 1", "sleep 1", "echo 2"},
		},
		testCreateLogger(t),
	)
	require.NoError(t, err)

	var results []output
	exitCode, err := executeCmd(
		context.Background(),
		cmd,
		func(data output) error {
			results = append(results, data.Clone())
			return nil
		},
		time.Millisecond*250,
	)
	assert.NoError(t, err)
	assert.Equal(t, 0, exitCode)
	assert.EqualValues(
		t,
		[]output{
			{Stdout: []byte("1\n")},
			{Stdout: []byte("2\n")},
		},
		results,
	)
}

func testStartRunnerServiceServer(t *testing.T) (
	interface{ Dial() (net.Conn, error) },
	func(),
) {
	logger, err := zap.NewDevelopment()
	require.NoError(t, err)
	lis := bufconn.Listen(2048)
	server := grpc.NewServer()
	runnerv1.RegisterRunnerServiceServer(server, newRunnerService(logger))
	go server.Serve(lis)
	return lis, server.Stop
}

func testCreateRunnerServiceClient(
	t *testing.T,
	lis interface{ Dial() (net.Conn, error) },
) (*grpc.ClientConn, runnerv1.RunnerServiceClient) {
	conn, err := grpc.Dial(
		"",
		grpc.WithContextDialer(func(ctx context.Context, s string) (net.Conn, error) {
			return lis.Dial()
		}),
		grpc.WithTransportCredentials(insecure.NewCredentials()),
	)
	require.NoError(t, err)
	return conn, runnerv1.NewRunnerServiceClient(conn)
}

type executeResult struct {
	Responses []*runnerv1.ExecuteResponse
	Err       error
}

func getExecuteResult(
	stream runnerv1.RunnerService_ExecuteClient,
	result chan<- executeResult,
) {
	var (
		resps []*runnerv1.ExecuteResponse
		err   error
	)

	for {
		r, rerr := stream.Recv()
		if rerr != nil {
			if rerr == io.EOF {
				rerr = nil
			}
			err = rerr
			break
		}
		resps = append(resps, r)
	}

	result <- executeResult{Responses: resps, Err: err}
}

func Test_runnerService_Execute(t *testing.T) {
	t.Parallel()

	lis, stop := testStartRunnerServiceServer(t)
	t.Cleanup(stop)
	_, client := testCreateRunnerServiceClient(t, lis)

	t.Run("Basic", func(t *testing.T) {
		t.Parallel()

		stream, err := client.Execute(context.Background())
		require.NoError(t, err)

		execResult := make(chan executeResult)
		go getExecuteResult(stream, execResult)

		err = stream.Send(&runnerv1.ExecuteRequest{
			ProgramName: "bash",
			Commands:    []string{"echo 1", "sleep 1", "echo 2"},
		})
		assert.NoError(t, err)
		assert.NoError(t, stream.CloseSend())

		result := <-execResult

		assert.NoError(t, result.Err)
		require.Len(t, result.Responses, 3)
		assert.Equal(t, "1\n", string(result.Responses[0].StdoutData))
		assert.Equal(t, "2\n", string(result.Responses[1].StdoutData))
		assert.EqualValues(t, 0, result.Responses[2].ExitCode.Value)
	})

	t.Run("Session", func(t *testing.T) {
		t.Parallel()

		envs := []string{"TEST_OLD=value1"}
		createSessResp, err := client.CreateSession(
			context.Background(),
			&runnerv1.CreateSessionRequest{Envs: envs},
		)
		require.NoError(t, err)
		assert.NotEmpty(t, createSessResp.Session.Id)
		assert.EqualValues(t, envs, createSessResp.Session.Envs)

		getSessResp, err := client.GetSession(
			context.Background(),
			&runnerv1.GetSessionRequest{Id: createSessResp.Session.Id},
		)
		require.NoError(t, err)
		assert.True(t, proto.Equal(createSessResp.Session, getSessResp.Session))

		_, err = client.DeleteSession(
			context.Background(),
			&runnerv1.DeleteSessionRequest{Id: getSessResp.Session.Id},
		)
		require.NoError(t, err)
	})

	t.Run("EnvsPersistence", func(t *testing.T) {
		t.Parallel()

		createSessResp, err := client.CreateSession(
			context.Background(),
			&runnerv1.CreateSessionRequest{
				Envs: []string{"SESSION=session1"},
			},
		)
		require.NoError(t, err)

		// First, execute using the session provided env variable SESSION.
		{
			stream, err := client.Execute(context.Background())
			require.NoError(t, err)

			execResult := make(chan executeResult)
			go getExecuteResult(stream, execResult)

			err = stream.Send(&runnerv1.ExecuteRequest{
				SessionId:   createSessResp.Session.Id,
				Envs:        []string{"EXEC_PROVIDED=execute1"},
				ProgramName: "bash",
				Commands: []string{
					"echo $SESSION $EXEC_PROVIDED",
					"export EXEC_EXPORTED=execute2",
				},
			})
			require.NoError(t, err)

			result := <-execResult

			assert.NoError(t, result.Err)
			require.Len(t, result.Responses, 2)
			assert.Equal(t, "session1 execute1\n", string(result.Responses[0].StdoutData))
			assert.EqualValues(t, 0, result.Responses[1].ExitCode.Value)
		}

		// Execute again using the newly exported env EXEC_EXPORTED.
		{
			stream, err := client.Execute(context.Background())
			require.NoError(t, err)

			execResult := make(chan executeResult)
			go getExecuteResult(stream, execResult)

			err = stream.Send(&runnerv1.ExecuteRequest{
				SessionId:   createSessResp.Session.Id,
				ProgramName: "bash",
				Commands: []string{
					"echo $EXEC_EXPORTED",
				},
			})
			require.NoError(t, err)

			result := <-execResult

			assert.NoError(t, result.Err)
			require.Len(t, result.Responses, 2)
			assert.Equal(t, "execute2\n", string(result.Responses[0].StdoutData))
			assert.EqualValues(t, 0, result.Responses[1].ExitCode.Value)
		}

		// Validate that the envs got persistent in the session.
		sessResp, err := client.GetSession(
			context.Background(),
			&runnerv1.GetSessionRequest{Id: createSessResp.Session.Id},
		)
		require.NoError(t, err)
		assert.EqualValues(
			t,
			// Session.Envs is sorted alphabetically
			[]string{"EXEC_EXPORTED=execute2", "EXEC_PROVIDED=execute1", "SESSION=session1"},
			sessResp.Session.Envs,
		)
	})
}