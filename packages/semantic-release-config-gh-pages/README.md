# `@stencila/semantic-release-config-gh-pages`

## Usage

This configuration package is same as [`@stencila/semantic-release-config`](../semantic-release-config),
but also adds support for publishing to GitHub Pages.

From the project where you would like to use these settings, run

```bash
npm install @stencila/semantic-release-config-gh-pages --save-dev
```

Then modify your `package.json` to include the following code block. If you already
have a `release` configuration defined there, you’ll need to modify it.

```json5
  // …
  "release": {
    "extends": "@stencila/semantic-release-config-gh-pages"
  }
  // …
```

## References

- [Semantic Release Shared Configs](https://github.com/semantic-release/semantic-release/blob/caribou/docs/usage/shareable-configurations.md)
