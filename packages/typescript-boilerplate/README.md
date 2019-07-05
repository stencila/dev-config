# `@stencila/typescript-boilerplate`

## What

An opinionated tooling setup for Typescript projects including,

- `typescript` for compiling Typescript
- `jest` for testing
- `typedoc` for source code documentation
- `ts-node` and `ts-node-dev` for running scripts during development

## Usage

Just use this as an example when creating a new project. Check out the `package.json` and add
or modify other files as needed...

A `tsconfig.json` file that `extends` or modifies the Typescript configuration in `dev-config` e.g.

```json
{
  "extends": "@stencila/dev-config/tsconfig.json",
  "compilerOptions": {
    /* Enable experimental support for ES7 decorators. */
    "experimentalDecorators": true
  }
}
```

Add a `jest` configuration object to your `package.json`:

```json5
  // …
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node",
    "testMatch": [
      "**/tests/**/*.test.ts"
    ]
  },
  // …
```

Create a `typedoc.json` file or modify the one in `dev-config`

```json
{
  "out": "./docs",
  "readme": "./README.md"
}
```

Add `scripts` to your `package.json` file for running tests, collecting coverage, building the package and generating documetation:

```json5
  // …
  "scripts": {
    "test": "jest",
    "test:cover": "jest --collectCoverage",
    "test:watch": "jest --watch",
    "build": "tsc",
    "docs": "typedoc src"
  },
  // …
```

5. Add `main`, `types` and other entries in your `package.json` file to point to the compiled files in the `dist` folder:

```json5
  // …
  "main": "dist/src/index.js",
  "types": "dist/src/index.d.ts",
  "bin": "dist/src/cli.js",
  // …
```

6. Add the following folders to your `.gitignore` file:

```
/coverage
/dist
/docs
```
