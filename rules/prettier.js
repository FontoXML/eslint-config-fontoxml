// Rules regarding eslint-plugin-prettier and eslint-config-prettier.
// See: https://www.npmjs.com/package/eslint-plugin-prettier
// See: https://www.npmjs.com/package/eslint-config-prettier
module.exports = {
	extends: [
		// @TODO: See if we can move away from running Prettier through ESLint.
		// See: https://prettier.io/docs/en/integrating-with-linters.html#notes
		//
		// Configure both eslint-plugin-prettier and eslint-config-prettier.
		// See: https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
		'plugin:prettier/recommended',
	],
	// @NOTE: Please take extra caution when turning rules back on here as these
	// get the final say. Plugins might require them to be turned off.
	rules: {
		curly: ['warn', 'all'], // @PRETTIER @AUTOFIX
		// Override: Warn instead of error on code formatting issues.
		'prettier/prettier': 'warn',
	},
};
