module.exports = {
	env: {
		browser: true,
		es2020: true,
		// @TODO: Consider splitting of node settings.
		node: true
	},
	extends: [
		'./rules/base',
		'./rules/es2020',
		'./rules/forbidden',
		'./rules/import',
		'./rules/node',
		'./rules/style',
		'./rules/variables',

		'prettier'
	],
	parserOptions: {
		sourceType: 'module'
	},
	plugins: ['import', 'prettier', 'simple-import-sort'],
	// @TODO: Properly configure import resolving.
	settings: {
		'import/core-modules': [],
		'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
		'import/resolver': {
			node: {
				extensions: ['.mjs', '.js', '.json', '.jsx']
			}
		}
	}
};
