module.exports = {
	overrides: [
		{
			// @NOTE: These rules are not included in the default configuration
			// because they require project-specific (TypeScript) configuration.
			extends: [
				'./rules/typeinfo',
				// @NOTE: Always extend the Prettier rules last.
				'./rules/prettier',
			],
			files: ['*.ts', '*.tsx'],
		},
	],
};
