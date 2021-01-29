module.exports = {
	overrides: [
		{
			env: {
				'jest/globals': true
			},
			extends: ['./rules/jest'],
			files: ['**/*.test.js'],
			plugins: ['jest']
		}
	]
};
