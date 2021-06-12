module.exports = {
	overrides: [
		{
			extends: [
				'./rules/react',
				'./rules/react-hooks',
				// @NOTE: Always extend the Prettier rules last.
				'./rules/prettier',
			],
			files: ['*.jsx', '*.tsx'],
			parserOptions: {
				babelOptions: {
					plugins: ['@babel/plugin-syntax-jsx'],
				},
			},
		},
	],
};
