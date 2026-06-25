import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true, // using string literals to pass some globals is actually deprecated in new eslint, but wait
        node: true,
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "warn"
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"]
  }
);
