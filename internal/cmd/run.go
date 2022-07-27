package cmd

import (
	"context"
	"os"
	"os/signal"
	"syscall"

	"github.com/pkg/errors"
	"github.com/spf13/cobra"
	"github.com/stateful/rdme/internal/parser"
	"github.com/stateful/rdme/internal/runner"
)

func runCmd() *cobra.Command {
	var dryRun bool

	cmd := cobra.Command{
		Use:               "run",
		Aliases:           []string{"exec"},
		Short:             "Run a selected command.",
		Args:              cobra.ExactArgs(1),
		ValidArgsFunction: validCmdNames,
		RunE: func(cmd *cobra.Command, args []string) error {
			p, err := newParser()
			if err != nil {
				return errors.Wrap(err, "fail to read README file")
			}

			snippets := p.Snippets()

			snippet, found := snippets.Lookup(args[0])
			if !found {
				return errors.Errorf("command %q not found; known command names: %s", args[0], snippets.Names())
			}

			executable, err := newExecutable(cmd, snippet)
			if err != nil {
				return errors.WithStack(err)
			}

			ctx, cancel := sigCtxCancel(cmd.Context())
			defer cancel()

			if dryRun {
				executable.DryRun(ctx, cmd.ErrOrStderr())
				return nil
			}

			return errors.WithStack(executable.Run(ctx))
		},
	}

	cmd.Flags().BoolVar(&dryRun, "dry-run", false, "Print the final command without executing.")

	return &cmd
}

func newExecutable(cmd *cobra.Command, s parser.Snippet) (runner.Executable, error) {
	switch s.Executable() {
	case "sh":
		return &runner.Shell{
			Cmds: s.Lines(),
			Base: runner.Base{
				Dir:    chdir,
				Stdin:  cmd.InOrStdin(),
				Stdout: cmd.OutOrStdout(),
				Stderr: cmd.ErrOrStderr(),
			},
		}, nil
	case "go":
		return &runner.Go{
			Source: s.Content(),
			Base: runner.Base{
				Dir:    chdir,
				Stdin:  cmd.InOrStdin(),
				Stdout: cmd.OutOrStdout(),
				Stderr: cmd.ErrOrStderr(),
			},
		}, nil
	default:
		return nil, errors.Errorf("unknown executable: %q", s.Executable())
	}
}

func sigCtxCancel(ctx context.Context) (context.Context, context.CancelFunc) {
	ctx, cancel := context.WithCancel(ctx)

	sigs := make(chan os.Signal, 1)
	signal.Notify(sigs, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		<-sigs
		cancel()
	}()

	return ctx, cancel
}
