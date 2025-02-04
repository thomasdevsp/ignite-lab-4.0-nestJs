// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "indent": ["error", 2],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "no-useless-catch": "off",
      "no-empty": "off",
      "no-empty-function": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-trailing-spaces": "warn",
      "prefer-const": "warn",
      semi: ["warn", "never"],
      quotes: ["warn", "double"],
      "jsx-quotes": ["warn", "prefer-double"],
      "object-curly-spacing": ["warn", "always"],
      "eol-last": ["warn", "always"],
      "array-bracket-spacing": ["warn", "never"],
      "computed-property-spacing": ["warn", "never"],
      "comma-dangle": ["warn", "always-multiline"],
      "comma-spacing": [
        "warn",
        {
          before: false,
          after: true,
        },
      ],
      "no-multiple-empty-lines": [
        "warn",
        {
          max: 1,
          maxEOF: 0,
        },
      ],
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
      "keyword-spacing": [
        "warn",
        {
          before: true,
          after: true,
        },
      ],
    },
  },
);
