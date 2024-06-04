//go:build !windows

package command

import (
	"testing"

	runnerv2alpha1 "github.com/stateful/runme/v3/pkg/api/gen/proto/go/runme/runner/v2alpha1"
)

func TestFileCommand(t *testing.T) {
	t.Parallel()

	t.Run("Shell", func(t *testing.T) {
		t.Parallel()

		cfg := &ProgramConfig{
			ProgramName: "bash",
			Source: &runnerv2alpha1.ProgramConfig_Commands{
				Commands: &runnerv2alpha1.ProgramConfig_CommandList{
					Items: []string{"echo -n test"},
				},
			},
			Mode: runnerv2alpha1.CommandMode_COMMAND_MODE_FILE,
		}

		testExecuteCommand(t, cfg, nil, "test", "")
	})

	t.Run("Python", func(t *testing.T) {
		t.Parallel()

		cfg := &ProgramConfig{
			ProgramName: "python3",
			Source: &runnerv2alpha1.ProgramConfig_Script{
				Script: "print('test')",
			},
			Mode: runnerv2alpha1.CommandMode_COMMAND_MODE_FILE,
		}

		testExecuteCommand(t, cfg, nil, "test\n", "")
	})

	// TypeScript runner requires the file extension to be .ts.
	t.Run("TypeScript", func(t *testing.T) {
		t.Parallel()

		cfg := &ProgramConfig{
			LanguageId: "ts",
			Source: &runnerv2alpha1.ProgramConfig_Script{
				Script: `function print(message: string): void {
	console.log(message)
}
print("important message")
`,
			},
			Mode: runnerv2alpha1.CommandMode_COMMAND_MODE_FILE,
		}

		testExecuteCommand(t, cfg, nil, "important message\n", "")
	})
}
