// Compare this snippet from services/users-verify/eslint.config.js:
// import { eslint } from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // 指定你的 tsconfig.json 路径
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "prettier/prettier": "error", // 将不符合 Prettier 规范的代码视为错误
    },
  },
  {
    files: ["src/**/*.js", "src/**/*.jsx"], // 可选：如果项目中包含 JavaScript 文件
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // 在此处添加 JavaScript 相关规则
    },
  },
  prettierConfig,
];
