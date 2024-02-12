import js from '@eslint/js';
import typeScriptPlugin from '@typescript-eslint/eslint-plugin';
import typeScriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

// @TODO: Check if the configuration can still be extended properly.
// @TODO: ESM package.
// @TODO: Node code / globals / etc.
// @TODO: Node plugin?
// @TODO: Toggle for:
// - (non) strict
// - (non) type aware checking

export default [
	// Document
	// env: {
	// 	node: true,
	//     browser: true
	// },
	// {
	//     languageOptions: {
	//         globals: ['mocha', "chai"]
	//     }
	// }
	{
		// Always use the TS parser since that supports all JS language features
		// we use and JSX. This prevents (selectively) using all kinds of other
		// plugins and complicating the configuration.
		files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: typeScriptParser,
			// @TODO: Check these options.
			parserOptions: {
				project: true,
				tsconfigRootDir: './',
				// @TODO: ES modules only, I guess?
				sourceType: 'module',
				jsxPragma: null,
			},
		},
		rules: {
			// Enable ESLint's recommended config.
			...js.configs.recommended.rules,
			// General rule overrides go here...
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
			// Load additional rules for React.
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
		},
		rules: {
			// Enable React's recommended config.
			...reactPlugin.configs.recommended.rules,
			// Disable rules not needed when new jsx runtime.
			...reactPlugin.configs['jsx-runtime'].rules,
			...reactHooksPlugin.configs.recommended.rules,
			// General rule overrides go here...
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		plugins: {
			// Load additional rules for TypeScript.
			'@typescript-eslint': typeScriptPlugin,
		},
		rules: {
			// Disable ESLint recommended rules for which there's a better
			// TS-specific alternative.
			...typeScriptPlugin.configs['eslint-recommended'].overrides[0]
				.rules,
			// Load TS recommended rules with type checked enabled. Alternatively,
			// use non-type checked to not have a dependency on tsconfig.json...
			...typeScriptPlugin.configs['recommended-type-checked'].rules,
			// @TODO: The following rules might require strict settings...not well documented.
			...typeScriptPlugin.configs['stylistic-type-checked'].rules,
			// @TODO: Can replace 'recommended-type-checked' when we're ready for strict mode.
			// ...typeScriptPlugin.configs['strict-type-checked'].rules,
		},
	},
	{
		// @TODO: Check whether we need more than just the import sort plugin.
		plugins: {
			'simple-import-sort': simpleImportSortPlugin,
		},
		rules: {
			'simple-import-sort/imports': 'warn',
			'simple-import-sort/exports': 'warn',

			// Disable ESLint rule, if set.
			'import/order': 'off',
			// Disable import plugin rule when set...
			'sort-imports': 'off',
		},
	},
	{
		rules: {
			// Disable rules conflicting with code formatting / Prettier.
			// @TODO: Check if eslint.style / DPrint / Biome have benefits over Prettier.
			...prettierConfig.rules,
		},
	},
];
