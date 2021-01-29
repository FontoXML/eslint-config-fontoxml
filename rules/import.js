// Rules regarding eslint-plugin-import.
// See: https://www.npmjs.com/package/eslint-plugin-import
module.exports = {
	extends: [
		// Configure both the plugin and its recommended rules.
		'plugin:import/recommended',
	],
	rules: {
		'import/dynamic-import-chunkname': 'off', // @TODO
		'import/exports-last': 'off', // @TODO
		'import/extensions': 'off', // @TODO
		'import/first': 'warn',
		'import/group-exports': 'off', // @TODO
		'import/max-dependencies': 'off', // @TODO
		'import/newline-after-import': 'warn',
		'import/no-absolute-path': 'off', // @TODO
		'import/no-amd': 'off', // @TODO
		'import/no-anonymous-default-export': 'off', // @TODO
		'import/no-commonjs': 'off', // @TODO
		'import/no-cycle': 'off', // @TODO
		'import/no-default-export': 'off', // @TODO
		'import/no-deprecated': 'off', // @TODO
		'import/no-dynamic-require': 'off', // @TODO
		'import/no-extraneous-dependencies': 'off', // @TODO
		'import/no-import-module-exports': 'off', // @TODO
		'import/no-internal-modules': 'off', // @TODO
		'import/no-mutable-exports': 'off', // @TODO
		'import/no-named-default': 'off', // @TODO
		'import/no-named-export': 'off', // @TODO
		'import/no-namespace': 'off', // @TODO @AUTOFIX
		'import/no-nodejs-modules': 'off', // @TODO
		'import/no-relative-packages': 'off', // @TODO
		'import/no-relative-parent-imports': 'off', // @TODO
		'import/no-restricted-paths': 'off', // @TODO
		'import/no-self-import': 'off', // @TODO
		'import/no-unassigned-import': 'off', // @TODO
		'import/no-unused-modules': 'off', // @TODO
		'import/no-useless-path-segments': 'off', // @TODO
		'import/no-webpack-loader-syntax': 'off', // @TODO
		// Turned off for eslint-plugin-simple-import-sort.
		// See: https://www.npmjs.com/package/eslint-plugin-simple-import-sort
		'import/order': 'off',
		'import/prefer-default-export': 'off', // @TODO
		'import/unambiguous': 'off', // @TODO

		// @TODO: Check the rules recommended by eslint-plugin-import and
		// determine whether they require an override. If not, remove them here.
		// 'import/default': 'error', // @TODO @RECOMMENDED
		// 'import/export': 'error', // @TODO @RECOMMENDED
		// 'import/named': 'error', // @TODO @RECOMMENDED
		// 'import/namespace': 'error', // @TODO @RECOMMENDED
		// 'import/no-duplicates': 'warn', // @TODO @RECOMMENDED
		// 'import/no-named-as-default-member': 'warn', // @TODO @RECOMMENDED
		// 'import/no-named-as-default': 'warn', // @TODO @RECOMMENDED
		// 'import/no-unresolved': 'error', // @TODO @RECOMMENDED
	},
};
