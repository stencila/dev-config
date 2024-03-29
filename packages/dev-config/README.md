# `@stencila/dev-config`

This repository contains configuration settings for various development tools used across
Stencila projects. This allows to avoid boilerplate when creating projects, have consistent settings across projects, and simplify workflows in general.

## Install

This package requires running a command to finish the installation. The command **will modify your project**:

- by adding or changing configuration properties to `package.json` (e.g. a `prettier` property that points to the Prettier configuration in this project)'
- by adding _missing_ config files like `.editorconfig`

To install run the following commands:

```bash
npm install @stencila/dev-config --save-dev
```

```bash
node -e 'require("@stencila/dev-config")'
```

If you decide you want to update your `package.json` at a later time, you can run the above command again.

Note that this package includes configurations for Typescript, Jest and related tooling but does not assume that you will be using them. Configurations for these can be copied over manually e.g.

```bash
cp node_modules/@stencila/dev-config/{tsconfig.json,typedoc.json} .
```

You'll also have to make these `devDependencies` of your project e.g.

```bash
npm install --save-dev typescript ts-node jest ts-jest @types/jest typedoc
```

## Tools

Most of these are setup automatically, on installation, or by running `init.js`.

### [EditorConfig](https://editorconfig.org/)

> EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles.

The [`.editorconfig`](.editorconfig) file from this repo is copied into the root of your project by `init.js`. Note the [VSCode](#vscode) config in this repo includes a recommendation to install the [`EditorConfig.EditorConfig`](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension. This will attempt to override user/workspace settings with settings found in the `.editorconfig` file.

### [Prettier](https://prettier.io/)

> Pettier is an opinionated code formatter which supports many languages, integrates with most editors, and has few options. Why? You press save and code is formatted. No need to discuss style in code review. Saves you time and energy. And [more ...](https://prettier.io/docs/en/why-prettier.html)

This repo includes a configuration file for Prettier, [`prettier-config.json`](./prettier-config.json). To enable it, add the following to your `package.json` (this is done for you by `init.js`).

```json5
  // …
  "prettier": "@stencila/dev-config/prettier-config.json"
  // …
```

### [ESLint](https://eslint.org/)

> 👋 **Requires manual installation**

> The pluggable linting utility for JavaScript and JSX [and Typescript]

Please see the [`@stencila/eslint-config`](../eslint-config) README for how to install the shared configuration for ESLint.

### [Husky](https://github.com/typicode/husky)

Husky is "Git hooks made easy". We use it with [`pretty-quick`](https://github.com/azz/pretty-quick) (to lint staged files) and [`commitlint`](https://github.com/conventional-changelog/commitlint) (to lint commit messages) .To enable Husky add the following to your project's `package.json` (this is done for you by `init.js`),

For monorepos, [it is recommended](https://typicode.github.io/husky/#/?id=monorepo) to install Husky only once at the root of the repository.

```sh
# Install Husky
npm install husky@latest --save-dev

# If installing in a new project:
# Ensure that commit messages follow a Semantic Commit message structure
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
# Run Prettier over staged files before committing them
npx husky add .husky/pre-commit "npx --no-install pretty-quick --staged"

# If upgrading an existing Husky installation
npx husky-init
npm exec -- github:typicode/husky-4-to-7 --remove-v4-config
# You will likely have to edit the generated git hooks,
# please follow the instructions printed and use the hook commands above as a reference
```

### [Semantic Release](https://semantic-release.gitbook.io/semantic-release/)

> 👋 **Requires manual installation**

> `semantic-release` automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package. This removes the immediate connection between human emotions and version numbers, strictly following the Semantic Versioning specification.

Please see the [`@stencila/semantic-release-config`](../semantic-release-config) README for how to use the shared configuration for Semantic Release.
