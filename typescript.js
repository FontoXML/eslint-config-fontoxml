module.exports = {
	overrides: [
		{
			// @TODO: Consider configuring https://www.npmjs.com/package/eslint-plugin-tsdoc
			extends: ['./rules/typescript'],
			files: ['*.ts', '*.tsx'],
			// Reconfigure the parser for .ts/.tsx files to support TypeScript.
			// Babel's ESLint parser is not used here because it cannot provide
			// type-aware AST annotations used by the TypeScript ESLint plugin.
			parser: '@typescript-eslint/parser',
		},
	],
};
