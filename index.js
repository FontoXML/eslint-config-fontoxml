module.exports = {
	parser: 'babel-eslint',
	extends: ['./base.js', 'prettier', 'prettier/react'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				printWidth: 100,
				quoteProps: 'consistent',
				singleQuote: true,
				tabWidth: 4,
				useTabs: true
			}
		]
	}
};
