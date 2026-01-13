import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

export default [
  // 기본 JS
  js.configs.recommended,

  // TypeScript
  ...tseslint.configs.recommended,

  // Vue 3
  ...vue.configs["flat/recommended"],

  // ⭐ Prettier 충돌 제거용 (규칙 비활성화)
  prettierConfig,

  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      // Vue + TS 실전용
      "@typescript-eslint/no-unused-expressions": "off",
      "vue/multi-word-component-names": "off",
    },
  },
];
