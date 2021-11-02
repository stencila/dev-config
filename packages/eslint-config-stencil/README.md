# `@stencila/eslint-config-stencil`

## Adding rules

When adding a rule, prefer `error` over `warn` as warnings tend to be ignored, whereas errors
can not. If a rule is fixable (i.e. using the `--fix` makes errors go away) then there is no inconvenience
anyway by making it an error instead of a warning.

## General Usage

It's recommended that you install this package using NPM v7 or higher.
This will ensure that any `peerDependencies` are automatically installed for you.

From the project where you would like to use these settings, run:

```bash
npm install --save-dev @stencila/eslint-config-stencil
```

Then modify your `package.json` to include the following code block. If you already
have a `eslintConfig` configuration defined there, you’ll need to modify it.

```json5
  // …
  "eslintConfig": {
    // If your project is inside a monorepo, include `"root": true`, otherwise it can be omitted
    "root": true,
    "extends": "@stencila/eslint-config-stencil",
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  }
  // …
```

### Installing with NPM v6 and below

For usage with NPM v6 and below, please follow the peerDependency warning messages shown in your console
when running the above command, or see the list of `peerDependencies` in the `package.json` file and install
them manually.

This is necessary because ESLint runs plugins relative to the end consuming project's root,
you need to install the all required plugins as dependencies of the project.
For details see [ESLint documentation](https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config).

## References

- [ESLint Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-config-prettier)
