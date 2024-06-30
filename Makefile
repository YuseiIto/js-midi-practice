.PHONY: devshell
devshell: # Just an wrapper of `nix develop` but with `$$SHELL` to keep using same shell not the default (bash)
	nix develop -c $$SHELL

.PHONY: fmt
fmt:
	nix fmt

.PHONY: run
run:
	node dist/index.js
