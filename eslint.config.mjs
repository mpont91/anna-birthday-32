import eslintPluginAstro from 'eslint-plugin-astro'
import eslintConfigPrettier from 'eslint-config-prettier'
import typescriptParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**'],
  },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: typescriptParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  eslintConfigPrettier,
]
