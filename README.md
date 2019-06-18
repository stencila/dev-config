# `dev-config`

> 🔧 Shared development configurations for Stencila projects

This repository contains configuration settings for various development tools
used across Stencila projects. This allows to avoid boilerplate when creating
projects, have consistent settings across projects, and simplify workflows in
general.

## [`@stencila/dev-config`](./packages/dev-config)

Configurations for EditorConfig, Prettier, Husky, and more. See the [README](./packages/dev-config#readme) for more. This package is
dependent on two other packages (that need to be separate NPM packages for
the particular tool's shared configuration mechanism to work):

- [`@stencila/eslint-config`](./packages/eslint-config)
- [`@stencila/semantic-release-config`](./packages/semantic-release-config)


## [`@stencila/typescript-boilerplate`](./packages/typescript-boilerplate)

An opinionated setup for Typescript projects including tools such as `jest`, `typedoc`, and `ts-node-dev`. See the [README](./packages/typescript-boilerplate#readme) for more.
