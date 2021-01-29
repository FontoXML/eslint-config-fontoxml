module.exports = {
	extends: [
		...require('./base').extends,
		...require('./jest').overrides[0].extends,
		...require('./react').overrides[0].extends,
		...require('./typescript').overrides[0].extends,
		'./rules/typeinfo.js'
	],
	plugins: [
		...require('./base').plugins,
		...require('./jest').overrides[0].plugins,
		...require('./react').overrides[0].plugins,
		...require('./typescript').overrides[0].plugins
	]
};
