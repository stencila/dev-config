const defaultConfig = require('./eslint-config')

module.exports = {
  ...defaultConfig,
  extends: ['plugin:@stencil/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars-experimental': [
      'error',
      {
        ignoredNamesRegex: '^_|^component(Will|Did)(Un)?[Ll]oad'
      }
    ]
  },
  parserOptions: {
    ...defaultConfig.parserOptions,
    project: './tsconfig.json',
    jsx: true,
  },
}
