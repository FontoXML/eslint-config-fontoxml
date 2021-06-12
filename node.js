module.exports = {
	env: {
		node: true,
	},
	// @TODO: Consider configuring https://www.npmjs.com/package/eslint-plugin-node
	extends: [
		// @NOTE: Always extend the Prettier rules last.
		'./rules/prettier',
	],
};
