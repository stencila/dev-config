# `@stencila/typescript-boilerplate`

## What

An opinionated tooling setup for Typescript projects including,

- `typescript` for compiling Typescript
- `jest` for testing
- `typedoc` for source code documentation
- `ts-node` and `ts-node-dev` for running scripts during development


## Usage

1. From the project where you would like to use this boilerplate setup run,

```bash
npm install @stencila/typescript-boilerplate --save-dev
```

2. Create a `tsconfig.json` file that `extends` the Typescript configuration in this project, adding any options that you wish to override:

```json
{
	"extends": "@stencila/typescript-boilerplate",
	"compilerOptions": {
    /* Enable experimental support for ES7 decorators. */
		"experimentalDecorators": true,
	}
}
```

3. Add a `jest` configuration object to your `package.json`:

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

4. Create a `typedoc.js` file:

```js
module.exports = {
  out: './docs',
  readme: './README.md'
}
```

or copy it from here 

```bash
cp node_modules/@stencila/typescript-boilerplate/typedoc.js .
```


4. Add `scripts` to your `package.json` file for running tests, collecting coverage, building the package and generating documetation:

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
