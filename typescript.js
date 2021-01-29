module.exports = {
	overrides: [
		{
			extends: [
				'./rules/typescript',

				'plugin:@typescript-eslint/eslint-recommended',
				'prettier/@typescript-eslint'
			],
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint/eslint-plugin'],
			// @TODO: Properly configure import resolving.
			settings: {
				'import/parsers': {
					'@typescript-eslint/parser': ['.ts', '.tsx']
				},
				'import/resolver': {
					node: {
						extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.json', '.mjs']
					}
				}
			}
		}
	]
};
