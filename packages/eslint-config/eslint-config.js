module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        // Because sometimes we define functions using const func = ...
        variables: false,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: false,
        allowNullableBoolean: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        // For things like
        //    const { content, ...rest } = node
        //    return rest
        ignoreRestSiblings: true,
        // For things like
        //    const [_unused_first_item, second] = pair()
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
}
