import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import importPlugin from 'eslint-plugin-import'
import hooksPlugin from 'eslint-plugin-react-hooks'
import pluginReact from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'self-maintenance-lib/**',
  ]),

  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      'import/no-unresolved': 'error',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'react/no-unstable-nested-components': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './jsconfig.json', // 指定你的 tsconfig 路徑
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    // Define the plugin explicitly within a configuration object
    plugins: {
      'react-hooks': hooksPlugin,
    },
    // Apply the rule override
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/no-unstable-nested-components': 'off',
    },
  },
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'lf' }],
    },
  },
])
