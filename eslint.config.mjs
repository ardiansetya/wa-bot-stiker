import js from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js, "simple-import-sort": simpleImportSort, }, rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    }, extends: ["js/recommended"]
  },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
]);
