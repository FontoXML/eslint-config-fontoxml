module.exports = {
	// --- REACT ---

	// There are good use cases for using findDOMNode
	'react/no-find-dom-node': 'off',

	// We don't validate props yet
	'react/prop-types': 'off',

	// --- REACT HOOKS ---

	// This rule is almost always right, so use 'warn' for now
	'react-hooks/exhaustive-deps': 'warn',
	// This rule is always right, so use 'error'
	'react-hooks/rules-of-hooks': 'error'
};
