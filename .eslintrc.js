module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prettier", "import"],
  rules: {
    "import/no-unresolved": "error",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-param-reassign": "off",
    "no-await-in-loop": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
  },
};
