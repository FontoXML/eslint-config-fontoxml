module.exports = {
	overrides: [
		{
			extends: ['./rules/react', './rules/react-hooks'],
			files: ['*.jsx', '*.tsx'],
			parserOptions: {
				babelOptions: {
					plugins: ['@babel/plugin-syntax-jsx'],
				},
			},
		},
	],
};
