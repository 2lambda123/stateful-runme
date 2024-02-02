//go:build !windows

package runnerv2service

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"

	runnerv2alpha1 "github.com/stateful/runme/internal/gen/proto/go/runme/runner/v2alpha1"
)

func TestRunnerServiceResolveVars(t *testing.T) {
	lis, stop := testStartRunnerServiceServer(t)
	t.Cleanup(stop)
	_, client := testCreateRunnerServiceClient(t, lis)

	testCases := []struct {
		name    string
		request *runnerv2alpha1.ResolveVarsRequest
	}{
		{
			name: "WithScript",
			request: &runnerv2alpha1.ResolveVarsRequest{
				Env: []string{"TEST_RESOLVED=value"},
				Source: &runnerv2alpha1.ResolveVarsRequest_Script{
					Script: "export TEST_RESOLVED=default\nexport TEST_UNRESOLVED",
				},
			},
		},
		{
			name: "WithCommands",
			request: &runnerv2alpha1.ResolveVarsRequest{
				Env: []string{"TEST_RESOLVED=value"},
				Source: &runnerv2alpha1.ResolveVarsRequest_Commands{
					Commands: &runnerv2alpha1.ResolveVarsRequest_CommandList{
						Items: []string{"export TEST_RESOLVED=default", "export TEST_UNRESOLVED"},
					},
				},
			},
		},
		{
			name: "WithAdditionalEnv",
			request: &runnerv2alpha1.ResolveVarsRequest{
				Env: []string{"TEST_RESOLVED=value", "TEST_EXTRA=value"},
				Source: &runnerv2alpha1.ResolveVarsRequest_Commands{
					Commands: &runnerv2alpha1.ResolveVarsRequest_CommandList{
						Items: []string{"export TEST_RESOLVED=default", "export TEST_UNRESOLVED"},
					},
				},
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			resp, err := client.ResolveVars(context.Background(), tc.request)
			require.NoError(t, err)
			require.Len(t, resp.Items, 2)
			require.EqualValues(
				t,
				&runnerv2alpha1.ResolveVarsResult{
					Name:          "TEST_RESOLVED",
					OriginalValue: "default",
					ResolvedValue: "value",
				},
				resp.Items[0],
			)
			require.EqualValues(
				t,
				&runnerv2alpha1.ResolveVarsResult{
					Name: "TEST_UNRESOLVED",
				},
				resp.Items[1],
			)
		})
	}
}