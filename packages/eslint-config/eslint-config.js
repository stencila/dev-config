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
        functions: false,
        // Because sometime we define functions using const func = ...
        variables: false
      }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true
      }
    ],
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    // TODO: Enable once TS-ESlint is updated
    // "@typescript-eslint/strict-boolean-expressions": "error",
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        // For things like
        //    const { content, ...rest } = node
        //    return rest
        ignoreRestSiblings: true,
        varsIgnorePattern: 'h' // This is for JSX support in StencilJS
      }
    ]
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module'
  }
}
