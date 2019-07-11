const defaultConfig = require('./eslint-config')

module.exports = {
  ...defaultConfig,
  extends: ['plugin:@stencil/recommended'],
  parserOptions: {
    ...defaultConfig.parserOptions,
    project: './tsconfig.json',
    jsx: true
  }
}
