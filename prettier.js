module.exports = {
	parser: 'babel-eslint',
	extends: [ 'prettier', 'prettier/react' ],
	plugins: [ 'prettier' ],
	rules: {
		'prettier/prettier': [
			'error',
			{
				'printWidth': 100,
				'singleQuote': true,
				'tabWidth': 4,
				'useTabs': true
			}
		]
	},
	overrides: [
		{
			files: '*.js',
			excludedFiles: '*.jsx.js',
			rules: {
				'prettier/prettier': 0
			}
		}
	]
};
