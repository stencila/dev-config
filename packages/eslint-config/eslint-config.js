module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  }
}
