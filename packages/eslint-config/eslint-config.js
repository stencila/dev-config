module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
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
        // Because sometimes we define functions using const func = ...
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
    '@typescript-eslint/ban-ts-ignore': 'warn',
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      { allowNullable: true }
    ],
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
