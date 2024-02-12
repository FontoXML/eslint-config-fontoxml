import js from '@eslint/js';
import typeScriptPlugin from '@typescript-eslint/eslint-plugin';
import typeScriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
	{
		files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: typeScriptParser,
			parserOptions: {
				ecmaVersion: 'latest',
			},
		},
		rules: {
			...js.configs['recommended'].rules,
		},
	},
	{
		files: ['**/*.jsx', '**/*.tsx'],
		settings: {
			react: {
				version: 'detect',
			},
		},
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
		},
		rules: {
			...reactPlugin.configs['recommended'].rules,
			...reactPlugin.configs['jsx-runtime'].rules,
			...reactHooksPlugin.configs['recommended'].rules,
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		plugins: {
			'@typescript-eslint': typeScriptPlugin,
		},
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: './',
			},
		},
		rules: {
			...typeScriptPlugin.configs['eslint-recommended'].overrides[0]
				.rules,
			...typeScriptPlugin.configs['strict-type-checked'].rules,
			...typeScriptPlugin.configs['stylistic-type-checked'].rules,

			// Additional rules not included in the presets.
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'separate-type-imports',
					disallowTypeAnnotations: true,
				},
			],
		},
	},
	{
		plugins: {
			import: importPlugin,
		},
		rules: {
			'import/consistent-type-specifier-style': [
				'error',
				'prefer-top-level',
			],
			'import/order': [
				'warn',
				{
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
						orderImportKind: 'asc',
					},
					groups: [
						'builtin',
						'external',
						'internal',
						['parent', 'sibling'],
						'index',
						'object',
					],
					'newlines-between': 'always',
				},
			],
		},
	},
	{
		rules: {
			// @TODO: Evaluate https://eslint.style/ as an alternative.
			...prettierConfig.rules,
		},
	},
];
