package server

import (
	"os"
	"path/filepath"
	"strconv"
	"strings"

	"github.com/pkg/errors"
	"github.com/spf13/cobra"
	"go.uber.org/zap"

	"github.com/stateful/runme/v3/internal/config"
	"github.com/stateful/runme/v3/internal/config/autoconfig"
	"github.com/stateful/runme/v3/internal/server"
)

func serverStartCmd() *cobra.Command {
	cmd := cobra.Command{
		Use:   "start",
		Short: "Start a server.",
		RunE: func(cmd *cobra.Command, args []string) error {
			return autoconfig.Invoke(
				func(
					cfg *config.Config,
					logger *zap.Logger,
				) error {
					defer logger.Sync()

					serverCfg := &server.Config{
						Address:    cfg.ServerAddress,
						CertFile:   cfg.ServerTLSCertFile,
						KeyFile:    cfg.ServerTLSKeyFile,
						TLSEnabled: cfg.ServerTLSEnabled,
					}

					logger.Debug("server config", zap.Any("config", serverCfg))

					s, err := server.New(serverCfg, logger)
					if err != nil {
						return err
					}

					if err := createPIDFile(cfg.ServerAddress); err != nil {
						return err
					}
					defer os.Remove(cfg.ServerAddress)

					return errors.WithStack(s.Serve())
				},
			)
		},
	}

	return &cmd
}

func pidFileName(addr string) string {
	if !strings.HasPrefix(addr, "unix://") {
		return ""
	}

	path := strings.TrimPrefix(addr, "unix://")
	path = filepath.Dir(path)
	return filepath.Join(path, "runme.pid")
}

func createPIDFile(addr string) error {
	path := pidFileName(addr)
	if path == "" {
		return nil
	}
	err := os.WriteFile(path, []byte(strconv.Itoa(os.Getpid())), 0o600)
	return errors.WithStack(err)
}