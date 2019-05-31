# Shared Stencila Development Tooling Configurations

This repository contains settings for various development tools used across
Stencila projects. This allows us to refer to avoid boilerplate when creating projects, have consistent settings across projects, and simplify workflows in general.

## Tools

### Prettier

From the project where you would like to use these settings, run

```bash
npm install prettier --save-dev --save-exact
npm install @stencila/dev-config --save-dev
```

Then modify your `package.json` to include the following line. If you already have a `prettier` configuration defined there, you’ll need to replace it.

```json
{
  // …
  "prettier": "@stencila/dev-config"
  // …
}
```
