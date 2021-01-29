// Rules regarding eslint-plugin-react-hooks.
// See: https://www.npmjs.com/package/eslint-plugin-react-hooks
module.exports = {
	extends: [
		// Configure both the plugin and its recommended rules.
		'plugin:react-hooks/recommended',
	],
	rules: {
		// @TODO: Check the rules recommended by eslint-plugin-react-hooks and
		// determine whether they require an override. If not, remove them here.
		// 'react-hooks/exhaustive-deps': 'warn', // @TODO @RECOMMENDED
		// 'react-hooks/rules-of-hooks': 'error' // @TODO @RECOMMENDED
	},
};
