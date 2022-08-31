# WASM example

This is an example of running rdme in a browser using WASM.

First, run `make wasm` from the root of the project. It will build rdme and copy proper files into this directory.

Second, start a webserver in this directory, for example, `python -m http.server 9000` and open `http://localhost:9000` in a browser. In the Developer Tools > Console you should see parsed snippets of some README.md file.
