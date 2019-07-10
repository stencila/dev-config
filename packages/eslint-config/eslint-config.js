module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false
      }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowHigherOrderFunctions: true
      }
    ],
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    // TODO: Enable once TS-ESlint is updated
    // "@typescript-eslint/restrict-plus-operands": "error",
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: 'h' }]
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module'
  }
}
