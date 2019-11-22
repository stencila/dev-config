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

## Contributing

Clone this project

```bash
git clone git@github.com:stencila/dev-config.git
```

Install the root project dependencies

```bash
npm install
```

Install the sub-module dependencies

```bash
npx lerna bootstrap
```

## Releasing new versions

Release are generated automatically when Pull Requests are merged into the `master` branch.

This process is automated thanks to [conventional
changelog](https://github.com/conventional-changelog/conventional-changelog)
style commit messages e.g. `docs(readme): fixed spelling mistake` and
[`Lerna`](https://github.com/lerna/lerna/blob/master/commands/version/README.md#--conventional-commits).
They enable us to automate version management: minor version releases are done if
any `feat(...)` commits are pushed, patch version releases are done if any
`fix(...)` commits are pushed. See [the
specifications](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) for
full details.
