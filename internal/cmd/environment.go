package cmd

import (
	"os"
	"strings"

	"github.com/spf13/cobra"
)

func environmentCmd() *cobra.Command {
	cmd := cobra.Command{
		Use:     "env",
		Aliases: []string{"environment"},
		Hidden:  true,
		Short:   "Environment management",
		Long:    "Various commands to manage environments in runme",
	}

	cmd.AddCommand(environmentDumpCmd())

	setDefaultFlags(&cmd)

	return &cmd
}

func environmentDumpCmd() *cobra.Command {
	cmd := cobra.Command{
		Use:   "dump",
		Short: "Dump environment variables to stdout",
		Long:  "Dumps all environment variables to stdout as a list of K=V separated by null terminators",
		RunE: func(cmd *cobra.Command, args []string) error {
			dumped := strings.Join(os.Environ(), "\000")

			_, _ = cmd.OutOrStdout().Write([]byte(dumped))

			return nil
		},
	}

	setDefaultFlags(&cmd)

	return &cmd
}