// Rules regarding @babel/eslint-plugin.
// See: https://www.npmjs.com/package/@babel/eslint-plugin
//
// @NOTE: Rules turned off by eslint-config-prettier are omitted here.
// See: https://www.npmjs.com/package/eslint-config-prettier
module.exports = {
	plugins: ['@babel'],
	rules: {
		'@babel/new-cap': 'off', // @TODO
		'@babel/no-invalid-this': 'off', // @TODO
		'@babel/no-unused-expressions': 'off', // @TODO
	},
};
