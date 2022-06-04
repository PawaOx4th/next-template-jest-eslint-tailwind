module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:testing-library/react",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "airbnb",
    "next/core-web-vitals",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "linebreak-style": "off",
    "react/button-has-type": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": "off",
    "react/function-component-definition": [
      "warn",
      {
        unnamedComponents: "function-expression",
        namedComponents: "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: false,
      },
    ],
    "@typescript-eslint/no-floating-promises": "off",
    "jest/expect-expect": "off",
    "no-unused-vars": ["warn", {
      "args": "after-used",
      "ignoreRestSiblings": false,
      "argsIgnorePattern": "^_"
    }]
  },
};
