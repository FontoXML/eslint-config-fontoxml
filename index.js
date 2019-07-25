const path = require('path');

const rulesForEslint = require('./rules-eslint');
const rulesForReact = require('./rules-react');
const rulesForTypeScript = require('./rules-typescript');

const prettierRule = {
	'prettier/prettier': [
		'warn',
		{
			printWidth: 100,
			quoteProps: 'consistent',
			singleQuote: true,
			tabWidth: 4,
			useTabs: true
		}
	]
};

module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['prettier', 'react', 'react-hooks'],
	extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react'],

	settings: {
		react: {
			version: '16.8.3'
		}
	},

	env: {
		amd: true,
		browser: true,
		es6: true,
		jest: true,
		mocha: true,
		node: true
	},

	globals: {
		chai: true,
		sinon: true
	},

	rules: {
		...rulesForEslint,
		...rulesForReact,
		...prettierRule
	},

	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],

			parser: path.resolve(__dirname, 'node_modules/@typescript-eslint/parser'),
			plugins: ['@typescript-eslint/eslint-plugin'],

			rules: {
				...rulesForEslint,
				...rulesForReact,
				...rulesForTypeScript,
				...prettierRule
			}
		}
	]
};
