// Rules regarding eslint-plugin-react.
// See: https://www.npmjs.com/package/eslint-plugin-react
module.exports = {
	extends: [
		// Configure both the plugin and its recommended rules.
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		// Enable import resolving for .jsx files.
		'plugin:import/react',
	],
	rules: {
		'react/boolean-prop-naming': 'off', // @TODO
		'react/button-has-type': 'off', // @TODO
		'react/default-props-match-prop-types': 'off', // @TODO
		'react/destructuring-assignment': 'off', // @TODO
		'react/forbid-component-props': 'off', // @TODO
		'react/forbid-dom-props': 'off', // @TODO
		'react/forbid-elements': 'off', // @TODO
		'react/forbid-foreign-prop-types': 'off', // @TODO
		'react/forbid-prop-types': 'off', // @TODO
		'react/function-component-definition': 'off', // @AUTOFIX
		'react/hook-use-state': 'off', // @TODO
		'react/iframe-missing-sandbox': 'off', // @TODO
		'react/jsx-boolean-value': 'off', // @AUTOFIX
		'react/jsx-curly-brace-presence': ['warn', 'never'], // @AUTOFIX
		'react/jsx-filename-extension': 'off', // @TODO
		'react/jsx-fragments': ['warn', 'syntax'], // @AUTOFIX
		'react/jsx-handler-names': 'off', // @TODO
		'react/jsx-max-depth': 'off', // @TODO
		'react/jsx-no-bind': 'off', // @TODO
		'react/jsx-no-constructed-context-values': 'off', // @TODO
		'react/jsx-no-leaked-render': 'off', // @AUTOFIX
		'react/jsx-no-literals': 'off', // @TODO
		'react/jsx-no-script-url': 'off', // @TODO
		'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }], // @AUTOFIX
		'react/jsx-pascal-case': 'off', // @TODO
		'react/jsx-props-no-spreading': 'off', // @TODO
		'react/jsx-sort-props': 'off', // @AUTOFIX
		'react/no-access-state-in-setstate': 'off', // @TODO
		'react/no-adjacent-inline-elements': 'off', // @TODO
		'react/no-array-index-key': 'off', // @TODO
		'react/no-arrow-function-lifecycle': 'warn', // @AUTOFIX
		'react/no-danger': 'off', // @TODO
		'react/no-did-mount-set-state': 'off', // @TODO
		'react/no-did-update-set-state': 'off', // @TODO
		'react/no-invalid-html-attribute': 'off', // @TODO
		'react/no-multi-comp': 'off', // @TODO
		'react/no-namespace': 'off', // @TODO
		'react/no-object-type-as-default-prop': 'error',
		'react/no-redundant-should-component-update': 'off', // @TODO
		'react/no-set-state': 'off', // @TODO
		'react/no-this-in-sfc': 'off', // @TODO
		'react/no-typos': 'off', // @TODO
		'react/no-unstable-nested-components': 'off', // @TODO
		'react/no-unused-class-component-methods': 'off', // @TODO
		'react/no-unused-prop-types': 'off', // @TODO
		'react/no-unused-state': 'off', // @TODO
		'react/no-will-update-set-state': 'off', // @TODO
		'react/prefer-es6-class': 'off', // @TODO
		'react/prefer-exact-props': 'off', // @TODO
		'react/prefer-read-only-props': 'off', // @AUTOFIX
		'react/prefer-stateless-function': 'off', // @TODO
		'react/require-default-props': 'off', // @TODO
		'react/require-optimization': 'off', // @TODO
		'react/self-closing-comp': 'warn', // @AUTOFIX
		'react/sort-comp': 'off', // @TODO
		'react/sort-default-props': 'off', // @TODO
		'react/sort-prop-types': 'off', // @TODO
		'react/state-in-constructor': 'off', // @TODO
		'react/static-property-placement': 'off', // @TODO
		'react/style-prop-object': 'off', // @TODO
		'react/void-dom-elements-no-children': 'off', // @TODO

		// @TODO: Check the rules recommended by eslint-plugin-react (incl.
		// react/jsx-runtime) and determine whether they require an override.
		// If not, remove them here.
		// 'react/display-name': 2, // @TODO @RECOMMENDED
		// 'react/jsx-key': 2, // @TODO @RECOMMENDED
		// 'react/jsx-no-comment-textnodes': 2, // @TODO @RECOMMENDED
		// 'react/jsx-no-duplicate-props': 2, // @TODO @RECOMMENDED
		// 'react/jsx-no-target-blank': 2, // @TODO @RECOMMENDED
		// 'react/jsx-no-undef': 2, // @TODO @RECOMMENDED
		// 'react/jsx-uses-react': 2, // @TODO @RECOMMENDED
		// 'react/jsx-uses-vars': 2, // @TODO @RECOMMENDED
		// 'react/no-children-prop': 2, // @TODO @RECOMMENDED
		// 'react/no-danger-with-children': 2, // @TODO @RECOMMENDED
		// 'react/no-deprecated': 2, // @TODO @RECOMMENDED
		// 'react/no-direct-mutation-state': 2, // @TODO @RECOMMENDED
		// 'react/no-find-dom-node': 2, // @TODO @RECOMMENDED
		// 'react/no-is-mounted': 2, // @TODO @RECOMMENDED
		// 'react/no-render-return-value': 2, // @TODO @RECOMMENDED
		// 'react/no-string-refs': 2, // @TODO @RECOMMENDED
		// 'react/no-unescaped-entities': 2, // @TODO @RECOMMENDED
		// 'react/no-unknown-property': 2, // @TODO @RECOMMENDED
		// 'react/no-unsafe': 0, // @TODO @RECOMMENDED
		// 'react/prop-types': 2, // @TODO @RECOMMENDED
		// 'react/react-in-jsx-scope': 2, // @TODO @RECOMMENDED
		// 'react/require-render-return': 2 // @TODO @RECOMMENDED
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
