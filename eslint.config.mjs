import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import tailwind from "eslint-plugin-tailwindcss";
import autoImportConfig from './.eslintrc-auto-import.json';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...tailwind.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: { 
      parserOptions: { 
        parser: tseslint.parser,
      },
      globals: globals.browser,
    },
  },
  autoImportConfig,
];


