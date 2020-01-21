# `@stencila/eslint-config`

## Adding rules

When adding a rule, prefer `error` over `warn` as warnings tend to be ignored, whereas errors
can not. If a rule is fixable (i.e. using the `--fix` makes errors go away) then there is no inconvenience
anyway by making it an error instead of a warning.

## General Usage

From the project where you would like to use these settings, run

```bash
npm install @stencila/eslint-config --save-dev
```

Then modify your `package.json` to include the following code block. If you already
have a `eslintConfig` configuration defined there, you’ll need to modify it.

```json5
  // …
  "eslintConfig": {
    "extends": "@stencila/eslint-config"
  }
  // …
```

## Using with React.js based projects

From the project where you would like to use these settings, run

```
npm install @stencila/eslint-config eslint-plugin-react react-hooks--save-dev
```

Then modify your `package.json` to include the following code block. If you already
have a `eslintConfig` configuration defined there, you’ll need to modify it.

```json5
  // …
  "eslintConfig": {
    "extends": "@stencila/eslint-config/eslint-config-react"
  }
  // …
```

## References

- [ESLint Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-config-prettier)
