# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/stencila/dev-config/compare/@stencila/eslint-config-stencil@2.0.0...@stencila/eslint-config-stencil@2.0.1) (2021-11-02)

### Bug Fixes

- **ESLint Stencil:** Add missing Stencil config to peerDependencies ([42cb548](https://github.com/stencila/dev-config/commit/42cb54850980c0442d8744937b21e34ff31de961))

# 2.0.0 (2021-11-01)

### Features

- **ESLint:** Simplify config, drop custom configs for React ([88265f1](https://github.com/stencila/dev-config/commit/88265f17d25a0dc263f0227eb214707939060b6d))

### BREAKING CHANGES

- **ESLint:** React specific configurations weren't used often, and so the
  current recommendation is to use other presets on top of Stencila's own.
