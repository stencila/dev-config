# `@stencila/dev-config`

This repository contains configuration settings for various development tools used across
Stencila projects. This allows to avoid boilerplate when creating projects, have consistent settings across projects, and simplify workflows in general.

## Install

```bash
npm install @stencila/dev-config --save-dev
```

This package includes an installation script that **will modify your project's `package.json`** by adding configuration properties to it (e.g. a `prettier` property that points to the Prettier configuration in this project). If you do not want that to happen run `npm install` with the `--ignore-scripts` option,

```bash
npm install @stencila/dev-config --save-dev --ignore-scripts
```

If you decide you want to update your `package.json` at a later time, you can run this script manually using,

```bash
node -e 'require("@stencila/dev-config")'
```

## Tools

Some of these tools require manual setup, they have the 🔨 emoji next to them. The others are setup automatically, on installation, or by running `init.js`. Those tools are indicated by a ⚡ emoji.

### 🔨 [EditorConfig](https://editorconfig.org/)

> EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles.

Copy the [`.editorconfig`](.editorconfig) file from this repo into the root of your project. Note the [VSCode](#vscode) config in this repo includes a recommendation to install the [`EditorConfig.EditorConfig`](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension. This will attempt to override user/workspace settings with settings found in the `.editorconfig` file.

### 🔨 [Visual Studio Code](https://code.visualstudio.com/)

Many of our contributors use VSCode as a code editor. So this repo includes a [`.vscode`](.vscode) with settings for VSCode. Since most of the generic code editing setting are defined in `.editorconfig`, the focus of these setting is VSCode specific things like recommended extensions and debug launch settings.

### ⚡ [Prettier](https://prettier.io/)

> Pettier is an opinionated code formatter which supports many languages, integrates with most editors, and has few options. Why? You press save and code is formatted. No need to discuss style in code review. Saves you time and energy. And [more ...](https://prettier.io/docs/en/why-prettier.html)

This repo includes a configuration file for Prettier, [`prettier-config.json`](./prettier-config.json). To enable it, add the following to your `package.json` (this is done for you by `init.js`).

```json5
  // …
  "prettier": "@stencila/dev-config/prettier-config.json"
  // …
```

### ⚡ [ESLint](https://eslint.org/)

> The pluggable linting utility for JavaScript and JSX [and Typescript]

This packages depends on [`@stencila/eslint-config`](../packages/eslint-config) which has a shared configuration for ESLint. The `init.js` script will add this config your project's `package.json`.

### ⚡ [Husky](https://github.com/typicode/husky)

Husky is "Git hooks made easy". We use it with [`pretty-quick`](https://github.com/azz/pretty-quick) (to lint staged files) and [`commitlint`](https://github.com/conventional-changelog/commitlint) (to lint commit messages) .To enable Husky add the following to your project's `package.json` (this is done for you by `init.js`),

```json5
  // …
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
  // …
```

### ⚡ [Semantic Release](https://semantic-release.gitbook.io/semantic-release/)

> `semantic-release` automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package. This removes the immediate connection between human emotions and version numbers, strictly following the Semantic Versioning specification.

This packages depends on [`@stencila/semantic-release-config`](../packages/semantic-release-config) which has a shared configuration for Semantic Release. The `init.js` script will add this config your project's `package.json`.
