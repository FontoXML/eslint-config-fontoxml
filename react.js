module.exports = {
	overrides: [
		{
			extends: [
				'./rules/babel',
				'./rules/jsx-a11y',
				'./rules/react',
				'./rules/react-hooks',

				'prettier/babel',
				'prettier/react'
			],
			files: ['*.jsx'],
			parser: '@babel/eslint-parser',
			parserOptions: {
				babelOptions: {
					cwd: __dirname,
					plugins: ['@babel/plugin-proposal-class-properties'],
					presets: ['@babel/preset-react']
				},
				ecmaFeatures: {
					jsx: true
				},
				requireConfigFile: false
			},
			plugins: ['@babel', 'jsx-a11y', 'react', 'react-hooks'],
			settings: {
				react: {
					pragma: 'React',
					version: 'detect'
				}
			}
		}
	]
};
