// Rules regarding eslint-plugin-prettier.
// See: https://www.npmjs.com/package/eslint-plugin-prettier
module.exports = {
	extends: [
		// @TODO: See if we can move away from running Prettier through ESLint.
		// See: https://prettier.io/docs/en/integrating-with-linters.html#notes
		//
		// Configure both eslint-plugin-prettier and eslint-config-prettier.
		// See: https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
		'plugin:prettier/recommended',
	],
	rules: {
		// Override: Warn instead of error on code formatting issues.
		'prettier/prettier': 'warn',
	},
};
