import js from '@eslint/js';
import typeScriptPlugin from '@typescript-eslint/eslint-plugin';
import typeScriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
	{
		name: 'fontoxml/base',
		files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: typeScriptParser,
			ecmaVersion: 'latest',
		},
		rules: {
			...js.configs['recommended'].rules,
			'eqeqeq': 'error',
			'no-console': 'error',
			'no-else-return': 'error',
			'no-eval': 'error',
			'no-lonely-if': 'error',
			'no-sequences': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-rename': 'error',
			'no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'object-shorthand': ['error', 'properties'],
			'prefer-template': 'error',
		},
	},
	{
		name: 'fontoxml/react',
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
			...reactHooksPlugin.configs['recommended-latest'].rules,
		},
	},
	{
		name: 'fontoxml/typescript',
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
			'@typescript-eslint/consistent-indexed-object-style': [
				'error',
				'index-signature',
			],
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'separate-type-imports',
					disallowTypeAnnotations: true,
				},
			],
			'@typescript-eslint/explicit-member-accessibility': 'error',
			'@typescript-eslint/no-invalid-void-type': ['error', { allowAsThisParameter: true}],
			'@typescript-eslint/no-unnecessary-type-parameters': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{ allowNumber: true, allowBoolean: true, allowNullish: true },
			],
			'@typescript-eslint/sort-type-constituents': 'error',
		},
	},
	{
		name: 'fontoxml/import',
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
						'parent',
						'sibling',
						'index',
						'object',
					],
					'newlines-between': 'always',
				},
			],
		},
	},
	{
		name: 'fontoxml/prettier',
		rules: {
			...prettierConfig.rules,
		},
	},
];
