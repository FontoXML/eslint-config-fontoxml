// Rules regarding eslint.
// See: https://eslint.org/docs/rules/
//
// @NOTE: Rules turned off by eslint-config-prettier are omitted here.
// See: https://www.npmjs.com/package/eslint-config-prettier
module.exports = {
	extends: [
		// Configure rules recommended by eslint.
		'eslint:recommended',
	],
	rules: {
		'accessor-pairs': 'off',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'camelcase': 'off', // @TODO
		'capitalized-comments': 'off', // @AUTOFIX
		'class-methods-use-this': 'off', // @TODO
		'complexity': ['warn', 14],
		'consistent-return': 'error',
		'consistent-this': 'off', // @TODO
		'default-case-last': 'off', // @TODO
		'default-case': 'off',
		'default-param-last': 'off', // @TODO
		'dot-notation': 'off',
		'eqeqeq': ['error', 'always'],
		'func-name-matching': 'off', // @TODO
		'func-names': 'off', // @TODO
		'func-style': 'off', // @TODO
		// Override: Allow implictly returning undefined.
		'getter-return': ['error', { allowImplicit: true }],
		'grouped-accessor-pairs': 'off',
		'guard-for-in': 'off',
		'id-denylist': 'off', // @TODO
		'id-length': 'off', // @TODO
		'id-match': 'off', // @TODO
		'init-declarations': 'off', // @TODO
		'line-comment-position': 'off', // @TODO
		'lines-between-class-members': 'warn', // @AUTOFIX
		'max-classes-per-file': 'off', // @TODO
		'max-depth': 'off', // @TODO
		'max-lines-per-function': 'off', // @TODO
		'max-lines': 'off', // @TODO
		'max-nested-callbacks': 'off', // @TODO
		'max-params': 'off', // @TODO
		'max-statements-per-line': 'off', // @TODO
		'max-statements': 'off', // @TODO
		'multiline-comment-style': 'off', // @AUTOFIX
		// Turned off for @babel/eslint-plugin.
		// See: https://www.npmjs.com/package/@babel/eslint-plugin
		'new-cap': 'off',
		'no-alert': 'warn',
		'no-array-constructor': 'off', // @TODO
		'no-await-in-loop': 'off', // @TODO
		'no-bitwise': 'off', // @TODO
		'no-caller': 'error',
		'no-console': 'warn',
		'no-constructor-return': 'error',
		'no-continue': 'off', // @TODO
		'no-div-regex': 'off',
		'no-duplicate-imports': 'off', // @TODO
		'no-else-return': ['error', { allowElseIf: false }],
		'no-empty-function': 'warn',
		'no-eq-null': 'off', // Handled by eqeqeq.
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'off', // Handled by no-labels.
		'no-implicit-coercion': 'off',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-inline-comments': 'off', // @TODO
		// Turned off for @babel/eslint-plugin.
		// See: https://www.npmjs.com/package/@babel/eslint-plugin
		'no-invalid-this': 'off',
		'no-iterator': 'error',
		'no-label-var': 'off', // @TODO
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'warn', // @AUTOFIX
		'no-loop-func': 'off',
		'no-loss-of-precision': 'error',
		'no-magic-numbers': 'off',
		'no-multi-assign': 'off', // @TODO
		'no-multi-str': 'error',
		'no-negated-condition': 'off', // @TODO
		'no-nested-ternary': 'off', // @TODO
		'no-new-func': 'off',
		'no-new-object': 'off', // @TODO
		'no-new-wrappers': 'error',
		'no-new': 'error',
		'no-nonoctal-decimal-escape': 'off', // @TODO
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-plusplus': 'off', // @TODO
		'no-promise-executor-return': 'off', // @TODO
		'no-proto': 'error',
		'no-restricted-exports': 'off',
		'no-restricted-globals': 'off', // @TODO
		'no-restricted-imports': 'off', // @TODO
		'no-restricted-properties': 'off',
		'no-restricted-syntax': 'off',
		'no-return-assign': 'error',
		'no-return-await': 'off', // @TODO
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow': 'off', // @TODO
		'no-template-curly-in-string': 'off', // @TODO
		'no-ternary': 'off', // @TODO
		'no-throw-literal': 'off',
		'no-undef-init': 'warn', // @AUTOFIX
		'no-undefined': 'off', // @TODO
		'no-underscore-dangle': 'off', // @TODO
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'warn', // @AUTOFIX
		'no-unreachable-loop': 'off', // @TODO
		'no-unsafe-optional-chaining': 'error',
		// Turned off for @babel/eslint-plugin.
		// See: https://www.npmjs.com/package/@babel/eslint-plugin
		'no-unused-expressions': 'off',
		'no-use-before-define': 'off', // @TODO
		'no-useless-backreference': 'off', // @TODO
		'no-useless-call': 'off', // @TODO
		'no-useless-computed-key': 'warn', // @AUTOFIX
		'no-useless-concat': 'off', // @TODO
		'no-useless-constructor': 'off', // @TODO
		'no-useless-rename': 'warn', // @AUTOFIX
		'no-useless-return': 'warn', // @AUTOFIX
		'no-var': 'error', // @AUTOFIX
		'no-void': 'off', // @TODO
		'no-warning-comments': 'off', // @TODO
		'object-shorthand': 'warn', // @AUTOFIX
		'one-var': ['warn', 'never'], // @AUTOFIX
		'operator-assignment': 'off', // @AUTOFIX
		'padding-line-between-statements': 'off', // @AUTOFIX
		'prefer-const': 'error', // @AUTOFIX
		'prefer-destructuring': 'off', // @AUTOFIX
		'prefer-exponentiation-operator': 'off', // @AUTOFIX
		'prefer-named-capture-group': 'off', // @TODO
		'prefer-numeric-literals': 'error', // @AUTOFIX
		'prefer-object-spread': 'warn', // @AUTOFIX
		'prefer-promise-reject-errors': 'off', // @TODO
		'prefer-regex-literals': 'off', // @TODO
		'prefer-rest-params': 'off', // @TODO
		'prefer-spread': 'off', // @TODO
		'prefer-template': 'warn', // @AUTOFIX
		'radix': 'off', // @TODO
		'require-atomic-updates': 'off', // @TODO
		'require-await': 'off', // @TODO
		'require-unicode-regexp': 'off', // @TODO
		// Turned off for eslint-plugin-simple-import-sort.
		// See: https://www.npmjs.com/package/eslint-plugin-simple-import-sort
		'sort-imports': 'off',
		'sort-keys': 'off', // @TODO
		'sort-vars': 'off', // @AUTOFIX
		'spaced-comment': 'warn', // @AUTOFIX
		'strict': 'off', // @AUTOFIX
		'symbol-description': 'off', // @TODO
		'vars-on-top': 'off', // @TODO
		'yoda': 'error', // @AUTOFIX

		// @TODO: Check the special-case rules of eslint-config-prettier and
		// determine whether they need to be enabled anyway. Move the
		// plugin-specific ones to their respective config files.
		// See: https://www.npmjs.com/package/eslint-config-prettier
		// 'curly': 0, // @TODO @PRETTIER @AUTOFIX
		// 'lines-around-comment': 0, // @TODO @PRETTIER @AUTOFIX
		// 'max-len': 0, // @TODO @PRETTIER
		// 'no-confusing-arrow': 0, // @TODO @PRETTIER @AUTOFIX
		// 'no-mixed-operators': 0, // @TODO @PRETTIER
		// 'no-tabs': 0, // @TODO @PRETTIER
		// 'no-unexpected-multiline': 0, // @TODO @PRETTIER
		// 'quotes': 0, // @TODO @PRETTIER @AUTOFIX
		// '@typescript-eslint/quotes': 0, // @TODO @PRETTIER @AUTOFIX

		// @TODO: Check the rules recommended by eslint and determine whether
		// they require an override. If not, remove them here.
		// 'constructor-super': 'error', // @TODO @RECOMMENDED
		// 'for-direction': 'error', // @TODO @RECOMMENDED
		// 'no-async-promise-executor': 'error', // @TODO @RECOMMENDED
		// 'no-case-declarations': 'error', // @TODO @RECOMMENDED
		// 'no-class-assign': 'error', // @TODO @RECOMMENDED
		// 'no-compare-neg-zero': 'error', // @TODO @RECOMMENDED
		// 'no-cond-assign': 'error', // @TODO @RECOMMENDED
		// 'no-const-assign': 'error', // @TODO @RECOMMENDED
		// 'no-constant-condition': 'error', // @TODO @RECOMMENDED
		// 'no-control-regex': 'error', // @TODO @RECOMMENDED
		// 'no-debugger': 'error', // @TODO @RECOMMENDED
		// 'no-delete-var': 'error', // @TODO @RECOMMENDED
		// 'no-dupe-args': 'error', // @TODO @RECOMMENDED
		// 'no-dupe-class-members': 'error', // @TODO @RECOMMENDED
		// 'no-dupe-else-if': 'error', // @TODO @RECOMMENDED
		// 'no-dupe-keys': 'error', // @TODO @RECOMMENDED
		// 'no-duplicate-case': 'error', // @TODO @RECOMMENDED
		// 'no-empty': 'error', // @TODO @RECOMMENDED
		// 'no-empty-character-class': 'error', // @TODO @RECOMMENDED
		// 'no-empty-pattern': 'error', // @TODO @RECOMMENDED
		// 'no-ex-assign': 'error', // @TODO @RECOMMENDED
		// 'no-extra-boolean-cast': 'error', // @TODO @RECOMMENDED @AUTOFIX
		// 'no-fallthrough': 'error', // @TODO @RECOMMENDED
		// 'no-func-assign': 'error', // @TODO @RECOMMENDED
		// 'no-global-assign': 'error', // @TODO @RECOMMENDED
		// 'no-import-assign': 'error', // @TODO @RECOMMENDED
		// 'no-inner-declarations': 'error', // @TODO @RECOMMENDED
		// 'no-invalid-regexp': 'error', // @TODO @RECOMMENDED
		// 'no-irregular-whitespace': 'error', // @TODO @RECOMMENDED
		// 'no-misleading-character-class': 'error', // @TODO @RECOMMENDED
		// 'no-new-symbol': 'error', // @TODO @RECOMMENDED
		// 'no-obj-calls': 'error', // @TODO @RECOMMENDED
		// 'no-octal': 'error', // @TODO @RECOMMENDED
		// 'no-prototype-builtins': 'error', // @TODO @RECOMMENDED
		// 'no-redeclare': 'error', // @TODO @RECOMMENDED
		// 'no-regex-spaces': 'error', // @TODO @RECOMMENDED @AUTOFIX
		// 'no-self-assign': 'error', // @TODO @RECOMMENDED
		// 'no-setter-return': 'error', // @TODO @RECOMMENDED
		// 'no-shadow-restricted-names': 'error', // @TODO @RECOMMENDED
		// 'no-sparse-arrays': 'error', // @TODO @RECOMMENDED
		// 'no-this-before-super': 'error', // @TODO @RECOMMENDED
		// 'no-undef': 'error', // @TODO @RECOMMENDED
		// 'no-unreachable': 'error', // @TODO @RECOMMENDED
		// 'no-unsafe-finally': 'error', // @TODO @RECOMMENDED
		// 'no-unsafe-negation': 'error', // @TODO @RECOMMENDED
		// 'no-unused-labels': 'error', // @TODO @RECOMMENDED @AUTOFIX
		// 'no-unused-vars': 'error', // @TODO @RECOMMENDED
		// 'no-useless-catch': 'error', // @TODO @RECOMMENDED
		// 'no-useless-escape': 'error', // @TODO @RECOMMENDED
		// 'no-with': 'error', // @TODO @RECOMMENDED
		// 'require-yield': 'error', // @TODO @RECOMMENDED
		// 'use-isnan': 'error', // @TODO @RECOMMENDED
		// 'valid-typeof': 'error' // @TODO @RECOMMENDED
	},
};
