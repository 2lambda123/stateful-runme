package cmd

import (
	"fmt"
	"strings"

	"github.com/pkg/errors"
	"github.com/spf13/cobra"
	"github.com/stateful/runme/v3/pkg/document/identity"
	"github.com/stateful/runme/v3/pkg/project"
)

func fmtCmd() *cobra.Command {
	var (
		flatten     bool
		formatJSON  bool
		identityStr string
		write       bool
	)

	cmd := cobra.Command{
		Use:   "fmt",
		Short: "Format a Markdown file into canonical format",
		Args:  cobra.MaximumNArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			if formatJSON {
				if write {
					return errors.New("invalid usage of --json with --write")
				}
				if !flatten {
					return errors.New("invalid usage of --json without --flatten")
				}
			}

			files := args

			if len(args) == 0 {
				var err error
				files, err = getProjectFiles(cmd)
				if err != nil {
					return err
				}
			}

			var identityResolver *identity.IdentityResolver
			switch strings.ToLower(identityStr) {
			case "all":
				identityResolver = identity.NewResolver(identity.AllLifecycleIdentity)
			case "doc", "document":
				identityResolver = identity.NewResolver(identity.DocumentLifecycleIdentity)
			case "cell":
				identityResolver = identity.NewResolver(identity.CellLifecycleIdentity)
			default:
				identityResolver = identity.NewResolver(identity.DefaultLifecycleIdentity)
			}

			return project.FormatFiles(files, identityResolver, formatJSON, write, func(file string, formatted []byte) error {
				out := cmd.OutOrStdout()
				_, _ = fmt.Fprintf(out, "===== %s =====\n", file)
				_, _ = out.Write(formatted)
				_, _ = fmt.Fprint(out, "\n")
				return nil
			})
		},
	}

	setDefaultFlags(&cmd)

	cmd.Flags().BoolVar(&flatten, "flatten", true, "Flatten nested blocks in the output. WARNING: This can currently break frontmatter if turned off.")
	cmd.Flags().BoolVar(&formatJSON, "json", false, "Print out data as JSON. Only possible with --flatten and not allowed with --write.")
	cmd.Flags().BoolVarP(&write, "write", "w", false, "Write result to the source file instead of stdout.")
	cmd.Flags().StringVar(&identityStr, "identity", "", "Set the lifecycle identity. Overrides the default.")
	_ = cmd.Flags().MarkDeprecated("flatten", "This flag is now default and no longer has any other effect.")

	return &cmd
}
