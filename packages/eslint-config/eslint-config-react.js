const defaultConfig = require("./eslint-config")

module.exports = {
  ...defaultConfig,
  extends: [
    ...defaultConfig.extends,
    "plugin:react/recommended",
    "prettier/react"
  ],
  plugins: [...defaultConfig.plugins, "react"],
  parserOptions: {
    ...defaultConfig.parserOptions,
    jsx: true
  }
}
