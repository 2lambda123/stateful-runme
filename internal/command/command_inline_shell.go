package command

import (
	"bytes"
	"context"
	"os"
	"path/filepath"

	"github.com/pkg/errors"
	"go.uber.org/zap"
)

type inlineShellCommand struct {
	internalCommand

	envCollector shellEnvCollector
	logger       *zap.Logger
	session      *Session
}

func (c *inlineShellCommand) getPty() *os.File {
	cmd, ok := c.internalCommand.(commandWithPty)
	if !ok {
		return nil
	}
	return cmd.getPty()
}

func (c *inlineShellCommand) Start(ctx context.Context) error {
	script, err := c.build()
	if err != nil {
		return err
	}

	c.logger.Debug("inline shell script", zap.String("script", script))

	cfg := c.ProgramConfig()
	cfg.Arguments = append(cfg.Arguments, "-c", script)

	return c.internalCommand.Start(ctx)
}

func (c *inlineShellCommand) Wait() error {
	err := c.internalCommand.Wait()

	if c.envCollector != nil {
		if cErr := c.collectEnv(); cErr != nil {
			c.logger.Info("failed to collect the environment", zap.Error(cErr))
			if err == nil {
				err = cErr
			}
		}
	}

	return err
}

func (c *inlineShellCommand) build() (string, error) {
	buf := bytes.NewBuffer(nil)
	bw := bulkWriter{Writer: buf}

	options, err := c.shellOptions()
	if err != nil {
		return "", err
	}
	if options != "" {
		bw.WriteString(options)
		bw.WriteString("\n\n")
	}

	// If the session is provided, we need to collect the environment before and after the script execution.
	// Here, we dump env before the script execution and use trap on EXIT to collect the env after the script execution.
	if c.session != nil {
		c.envCollector, err = newFifoShellEnvCollector(buf)
		if err != nil {
			return "", err
		}
	}

	cfg := c.ProgramConfig()

	// Write the script from the commands or the script.
	if commands := cfg.GetCommands(); commands != nil {
		for _, cmd := range commands.Items {
			bw.WriteString(cmd)
			bw.WriteByte('\n')
		}
	} else if script := cfg.GetScript(); script != "" {
		bw.WriteString(script)
	}

	return buf.String(), nil
}

func (c *inlineShellCommand) collectEnv() error {
	if c.session == nil || c.envCollector == nil {
		return nil
	}

	changed, deleted, err := c.envCollector.Collect()
	if err != nil {
		return err
	}
	if err := c.session.SetEnv(changed...); err != nil {
		return errors.WithMessage(err, "failed to set the new or updated env")
	}
	c.session.DeleteEnv(deleted...)

	return nil
}

func (c *inlineShellCommand) shellOptions() (string, error) {
	program, _, err := c.ProgramPath()
	if err != nil {
		return "", err
	}

	shell := filepath.Base(program)

	// TODO(mxs): powershell and DOS are missing
	switch shell {
	case "zsh", "ksh", "bash":
		return "set -e -o pipefail", nil
	case "sh":
		return "set -e", nil
	default:
		return "", nil
	}
}
