// Rules regarding @typescript-eslint/eslint-plugin.
// @NOTE: These rules require type information to work properly. They are not
// enabled by default because they require additional, project-specific,
// configuration and have a noticable impact on performance.
// See: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
module.exports = {
	extends: [
		// Configure both the plugin and its recommended rules, and disable
		// redundant and conflicting eslint rules.
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	rules: {
		// @NOTE: When enabling rules listed below, make sure to disable any
		// conflicting eslint rules. See the documentation for each rule for
		// details.
		// See: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
		// Override: disabled for TypeScript-specific rule.
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': 'warn', // @AUTOFIX
		'@typescript-eslint/naming-convention': 'off', // @TODO
		'@typescript-eslint/no-base-to-string': 'off', // @TODO
		'@typescript-eslint/no-confusing-void-expression': 'error', // @AUTOFIX
		'@typescript-eslint/no-throw-literal': 'off', // @TODO
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn', // @AUTOFIX
		'@typescript-eslint/no-unnecessary-condition': 'error', // @AUTOFIX
		'@typescript-eslint/no-unnecessary-qualifier': 'error', // @AUTOFIX
		'@typescript-eslint/no-unnecessary-type-arguments': 'warn', // @AUTOFIX
		'@typescript-eslint/no-unsafe-argument': 'off', // @TODO
		'@typescript-eslint/non-nullable-type-assertion-style': 'warn', // @AUTOFIX
		'@typescript-eslint/prefer-includes': 'error', // @AUTOFIX
		'@typescript-eslint/prefer-nullish-coalescing': 'off', // @TODO
		'@typescript-eslint/prefer-readonly': 'error', // @AUTOFIX
		'@typescript-eslint/prefer-readonly-parameter-types': 'off', // @TODO
		'@typescript-eslint/prefer-reduce-type-parameter': 'error', // @AUTOFIX
		'@typescript-eslint/prefer-string-starts-ends-with': 'error', // @AUTOFIX
		'@typescript-eslint/promise-function-async': 'warn', // @AUTOFIX
		'@typescript-eslint/require-array-sort-compare': 'off', // @TODO
		// Override: disabled for TypeScript-specific rule.
		'no-return-await': 'off',
		'@typescript-eslint/return-await': ['error', 'in-try-catch'], // @AUTOFIX
		'@typescript-eslint/strict-boolean-expressions': 'error', // @AUTOFIX
		'@typescript-eslint/switch-exhaustiveness-check': 'off', // @TODO

		// @TODO: Check the rules recommended by @typescript-eslint/eslint-plugin
		// and determine whether they require an override. If not, remove them
		// here. Note that some eslint rules are turned off because they're
		// redundant or incompatible with TypeScript.
		// '@typescript-eslint/await-thenable': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-floating-promises': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-for-in-array': 'error', // @TODO @RECOMMENDED
		// 'no-implied-eval': 'off', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-implied-eval': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-misused-promises': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-unnecessary-type-assertion': 'error', // @TODO @RECOMMENDED @AUTOFIX
		// '@typescript-eslint/no-unsafe-assignment': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-unsafe-call': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-unsafe-member-access': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-unsafe-return': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/prefer-regexp-exec': 'error', // @TODO @RECOMMENDED @AUTOFIX
		// 'require-await': 'off', // @TODO @RECOMMENDED
		// '@typescript-eslint/require-await': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/restrict-plus-operands': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/restrict-template-expressions': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/unbound-method': 'error', // @TODO @RECOMMENDED
	},
};
