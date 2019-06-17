# `@stencila/dev-config`

This repository contains configuration settings for various development tools used across
Stencila projects. This allows to avoid boilerplate when creating projects, have consistent settings across projects, and simplify workflows in general.

## Install

```bash
npm install @stencila/dev-config --save-dev
```

## Tools

### [EditorConfig](https://editorconfig.org/)

> EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. 

Copy the [`.editorconfig`](.editorconfig) file from this repo into the root of your project. Note the [VSCode](#vscode) config in this repo includes a recommendation to install the [`EditorConfig.EditorConfig`](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension. This will attempt to override user/workspace settings with settings found in the `.editorconfig` file. 

### [Visual Studio Code](https://code.visualstudio.com/)

Many of our contributors use VSCode as a code editor. So this repo includes a [`.vscode`](.vscode) with settings for VSCode. Since most of the generic code editing setting are defined in `.editorconfig`, the focus of these setting is VSCode specific things like recommended extensions and debug launch settings.

### [Prettier](https://prettier.io/)

> Pettier is an opinionated code formatter which supports many languages, integrates with most editors, and has few options. Why? You press save and code is formatted. No need to discuss style in code review. Saves you time and energy. And [more ...](https://prettier.io/docs/en/why-prettier.html)

This repo includes a configuration file for Prettier, [`prettier-config.json`](prettier-config.json). To enable it, add the following to your `package.json`.

```json5
{
  // …
  "prettier": "@stencila/dev-config"
  // …
}
```

### Git Hooks

[Husky](https://github.com/typicode/husky) is "Git hooks made easy". We use it with [`pretty-quick`](https://github.com/azz/pretty-quick) (to lint staged files) and [`commitlint`](https://github.com/conventional-changelog/commitlint) (to lint commit messages).

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
