import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			eslintReact.configs['recommended-typescript'],
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
			eslintConfigPrettier,
		],
	},
	{
		rules: {
			'no-unused-vars': 'warn',
		},
	},
])
