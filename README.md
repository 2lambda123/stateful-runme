# rdme

Discover and run code snippets directly from your `README.md` or other markdowns (defaults to local `README.md`).

rdme makes a best effort approach to extracts all code snippets defined in code blocks and allowing to explore and execute them. rdme is currently in early alpha.

You can execute commands from a different directory using a `--chdir` flag.
To select a different file than `README.md`, use `--filename`.

## Installation

The easiest way on MacOS is to use Homebrew:

```sh
$ brew install stateful/tap/rdme
```

Alternatively, check out [rdme's releases](https://github.com/stateful/rdme/releases) and select
a binary for your operating system.

If you have Go developer tools installed, you can install it with `go install`:

```sh
$ go install github.com/stateful/rdme@latest
```

## Contributing & Feedback

Let us know what you think via GitHub issues or submit a PR. Join the conversation [on Discord](https://discord.gg/MFtwcSvJsk). We're looking forward to hear from you.

## LICENCE

Apache License, Version 2.0

## Acknowledgements

Thankful users of TensorFlow model guesslang by https://github.com/yoeo/guesslang located in `data` is a copy of https://github.com/yoeo/guesslang/tree/master/guesslang/data licensed under the MIT License.
