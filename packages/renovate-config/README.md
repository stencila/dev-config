# `@stencila/renovate-config`

## Usage

From the project where you would like to use these settings, run

```bash
npm install @stencila/renovate-config --save-dev
```

Then modify your `package.json` to include the following:

```json5
  // …
  "renovate": {
    "extends": ["@stencila"]
  }
  // …
```

The `default` preset config has a number of settings to reduce noise,

- weekly updates
- `devDependencies` are grouped into a single PR

If you want to use one of the other presets (see the `renovate-config` section of this [`package.json`](package.json)) then use a semicolon and the preset name e.g.

```json5
  // …
  "renovate": {
    "extends": ["@stencila:groupAll"]
  }
  // …
```

## References

- [Renovate Shared Configs](https://docs.renovatebot.com/config-presets/)
