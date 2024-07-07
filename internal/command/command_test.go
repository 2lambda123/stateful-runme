package command

import (
	"bytes"
	"context"
	"io"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"go.uber.org/zap/zaptest"
)

func init() {
	// Switch from "runme env" to "env -0" for the tests.
	// This is because the "runme env" command is not available
	// in the test environment.
	//
	// TODO(adamb): this can be changed. runme must be built
	// in the test environment and put into the PATH.
	EnvDumpCommand = "env -0"
}

func testExecuteCommand(
	t *testing.T,
	cfg *ProgramConfig,
	input io.Reader,
	expectedStdout string,
	expectedStderr string,
) {
	t.Helper()

	testExecuteCommandWithSession(t, cfg, nil, input, expectedStdout, expectedStderr)
}

func testExecuteCommandWithSession(
	t *testing.T,
	cfg *ProgramConfig,
	session *Session,
	input io.Reader,
	expectedStdout string,
	expectedStderr string,
) {
	t.Helper()

	stdout := bytes.NewBuffer(nil)
	stderr := bytes.NewBuffer(nil)

	options := CommandOptions{
		Session: session,
		Stdout:  stdout,
		Stderr:  stderr,
		Stdin:   input,
	}

	factory := NewFactory(WithLogger(zaptest.NewLogger(t)))
	command := factory.Build(cfg, options)

	err := command.Start(context.Background())
	require.NoError(t, err)
	err = command.Wait()
	assert.NoError(t, err)
	assert.Equal(t, expectedStdout, stdout.String())
	assert.Equal(t, expectedStderr, stderr.String())
}
