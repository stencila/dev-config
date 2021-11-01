# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.0.0 (2021-11-01)

### Features

- **ESLint:** Simplify config, drop custom configs for React ([88265f1](https://github.com/stencila/dev-config/commit/88265f17d25a0dc263f0227eb214707939060b6d))

### BREAKING CHANGES

- **ESLint:** React specific configurations weren't used often, and so the
  current recommendation is to use other presets on top of Stencila's own.
