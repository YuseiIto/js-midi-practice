{
  description = "js-midi-practice: Just a simple project to practice MIDI in JS.";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils = { url = "github:numtide/flake-utils"; };
  };
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = import nixpkgs { inherit system; };
      in {
        # nix develop
        devShell = pkgs.mkShell { buildInputs = with pkgs; [ nodejs ]; };
        formatter = pkgs.nixfmt;
      });
}
