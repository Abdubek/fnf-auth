import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import stylisticJs from "@stylistic/eslint-plugin-js";
import stylisticTs from "@stylistic/eslint-plugin-ts";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      "@stylistic/js": stylisticJs,
      "@stylistic/ts": stylisticTs,
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier integration
      "prettier/prettier": "error",
      
      // Stylistic rules
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/quotes": ["error", "single"],
      "@stylistic/js/semi": ["error", "always"],
      "@stylistic/ts/indent": ["error", 2],
      "@stylistic/ts/quotes": ["error", "single"],
      "@stylistic/ts/semi": ["error", "always"],
    },
  },
  prettierConfig,
]);

export default eslintConfig;
