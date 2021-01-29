// Get all configured rules in scope of eslint-find-rules.
module.exports = {
	extends: [
		...require('./base').extends,
		...require('./node').extends,
		...require('./react').overrides[0].extends,
		...require('./typescript').overrides[0].extends,
		'./rules/typeinfo.js',
	],
};
