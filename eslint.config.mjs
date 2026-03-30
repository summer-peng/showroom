import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import prettier from "eslint-config-prettier/flat"
import importPlugin from "eslint-plugin-import"
import hooksPlugin from "eslint-plugin-react-hooks"
import pluginReact from "eslint-plugin-react"
import prettierPlugin from "eslint-plugin-prettier"

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "self-maintenance-lib/**",
  ]),

  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"],
        },
      },
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],
      "import/no-unresolved": "error",

      // 一般程式碼先不要允許 devDependencies
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: false,
          packageDir: ["./"],
        },
      ],

      "react/no-unstable-nested-components": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  // 測試檔 / Jest 設定檔 / ESLint 設定檔 允許 devDependencies
  {
    files: [
      "**/*.test.{js,jsx,ts,tsx}",
      "**/*.spec.{js,jsx,ts,tsx}",
      "**/__tests__/**",
      "**/test/**",
      "**/tests/**",
      "**/jest.setup.{js,ts}",
      "**/jest.config.{js,ts,mjs,cjs}",
      "**/eslint.config.{js,mjs,cjs,ts}",
    ],
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
          packageDir: ["./"],
        },
      ],
    },
  },

  {
    plugins: {
      "react-hooks": hooksPlugin,
    },
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/no-unstable-nested-components": "off",
    },
  },

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "lf" }],
    },
  },
])
