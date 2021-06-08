module.exports = {
	env: {
		es2021: true,
	},
	// @TODO: Consider configuring https://www.npmjs.com/package/eslint-plugin-jsdoc
	// @TODO: Consider configuring https://www.npmjs.com/package/eslint-plugin-eslint-comments
	extends: [
		'./rules/prettier',
		'./rules/base',
		'./rules/babel',
		'./rules/import',
		'./rules/import-sort',
	],
	// @NOTE: Consider switching back to ESLint's default parser (Espree) once
	// it supports class fields.
	// See: https://github.com/eslint/eslint/issues/14343
	parser: '@babel/eslint-parser',
	parserOptions: {
		babelOptions: {
			cwd: __dirname,
		},
		requireConfigFile: false,
	},
};
