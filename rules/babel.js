module.exports = {
	rules: {
		'@babel/new-cap': 'off',
		'@babel/no-invalid-this': ['error', { capIsConstructor: false }],
		'@babel/no-unused-expressions': [
			'error',
			{ allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }
		],
		'@babel/object-curly-spacing': ['off', 'always'], // In favour of Prettier.
		'@babel/semi': ['off', 'always'] // In favour of Prettier.
	}
};
