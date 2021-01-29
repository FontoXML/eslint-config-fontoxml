// Rules regarding eslint-plugin-simple-import-sort.
// See: https://www.npmjs.com/package/eslint-plugin-simple-import-sort
module.exports = {
	plugins: ['simple-import-sort'],
	rules: {
		'simple-import-sort/exports': 'warn',
		'simple-import-sort/imports': 'warn',
	},
};
