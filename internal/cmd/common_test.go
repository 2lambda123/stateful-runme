package cmd

import (
	"fmt"
	"testing"

	runnerv1 "github.com/stateful/runme/v3/internal/gen/proto/go/runme/runner/v1"
	"github.com/stateful/runme/v3/internal/tui/prompt"
	"github.com/stretchr/testify/assert"
)

func TestResolveInputParams(t *testing.T) {
	variable := &runnerv1.ResolveProgramResponse_VarResult{
		Name:          "MY_VARIABLE",
		ResolvedValue: "resolved_value",
		OriginalValue: "original_value",
		Status:        runnerv1.ResolveProgramResponse_STATUS_UNRESOLVED_WITH_PLACEHOLDER,
	}

	expected := prompt.InputParams{
		Label: "Set Environment Variable \"MY_VARIABLE\":",
		Value: "original_value",
	}

	result := resolveInputParams(variable)
	assert.Equal(t, expected, result)
}
func TestResolveRequestMode(t *testing.T) {
	autoMode := runnerv1.ResolveProgramRequest_MODE_UNSPECIFIED
	promptAllMode := runnerv1.ResolveProgramRequest_MODE_PROMPT_ALL
	skipAllMode := runnerv1.ResolveProgramRequest_MODE_SKIP_ALL

	tests := []struct {
		name     string
		cellMode string
		expected *runnerv1.ResolveProgramRequest_Mode
		err      error
	}{
		{
			name:     "Auto mode",
			cellMode: "auto",
			expected: &autoMode,
			err:      nil,
		},
		{
			name:     "Prompt all mode",
			cellMode: "1",
			expected: &promptAllMode,
			err:      nil,
		},
		{
			name:     "Skip all mode",
			cellMode: "0",
			expected: &skipAllMode,
			err:      nil,
		},
		{
			name:     "Unknown mode",
			cellMode: "unknown",
			expected: nil,
			err:      fmt.Errorf("unknown mode %q", "unknown"),
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			result, err := resolveRequestMode(test.cellMode)
			assert.Equal(t, test.expected, result)
			assert.Equal(t, test.err, err)
		})
	}
}
