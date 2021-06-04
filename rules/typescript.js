// Rules regarding @typescript-eslint/eslint-plugin.
// See: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
//
// @NOTE: Rules turned off by eslint-config-prettier are omitted here.
// See: https://www.npmjs.com/package/eslint-config-prettier
module.exports = {
	extends: [
		// Configure both the plugin and its recommended rules and disable
		// redundant and conflicting eslint rules.
		'plugin:@typescript-eslint/recommended',
		// Enable import resolving for .ts and .tsx files and disable
		// redundant and conflicting eslint rules.
		'plugin:import/typescript',
	],
	rules: {
		// @NOTE: When enabling rules listed below, make sure to disable any
		// conflicting eslint rules. See the documentation for each rule for
		// details.
		// See: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
		'@typescript-eslint/array-type': ['warn', { default: 'array' }], // @AUTOFIX
		'@typescript-eslint/ban-tslint-comment': 'error', // @AUTOFIX
		'@typescript-eslint/class-literal-property-style': 'off', // @AUTOFIX
		'@typescript-eslint/consistent-indexed-object-style': [
			'warn',
			'index-signature',
		], // @AUTOFIX
		'@typescript-eslint/consistent-type-assertions': 'off', // @TODO
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'], // @AUTOFIX
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{ prefer: 'type-imports' },
		], // @AUTOFIX
		'@typescript-eslint/default-param-last': 'off', // @TODO
		'@typescript-eslint/explicit-function-return-type': 'off', // @TODO
		'@typescript-eslint/explicit-member-accessibility': [
			'warn',
			{ accessibility: 'explicit' },
		], // @AUTOFIX
		'@typescript-eslint/init-declarations': 'off', // @TODO
		'@typescript-eslint/lines-between-class-members': 'warn', // @AUTOFIX
		'@typescript-eslint/member-delimiter-style': 'warn', // @AUTOFIX,
		'@typescript-eslint/member-ordering': 'off', // @TODO
		'@typescript-eslint/method-signature-style': ['warn', 'method'], // @AUTOFIX
		'@typescript-eslint/no-confusing-non-null-assertion': 'error', // @AUTOFIX
		'@typescript-eslint/no-dupe-class-members': 'off', // @TODO
		'@typescript-eslint/no-duplicate-imports': 'off', // @TODO
		'@typescript-eslint/no-dynamic-delete': 'off', // @AUTOFIX
		'@typescript-eslint/no-extraneous-class': 'off', // @TODO
		'@typescript-eslint/no-implicit-any-catch': 'warn', // @AUTOFIX
		'@typescript-eslint/no-invalid-this': 'off', // @TODO
		'@typescript-eslint/no-invalid-void-type': 'off', // @TODO
		'@typescript-eslint/no-loop-func': 'off', // @TODO
		'@typescript-eslint/no-loss-of-precision': 'off', // @TODO
		'@typescript-eslint/no-magic-numbers': 'off', // @TODO
		'@typescript-eslint/no-parameter-properties': 'off', // @TODO
		'@typescript-eslint/no-redeclare': 'off', // @TODO
		'@typescript-eslint/no-require-imports': 'off', // @TODO
		'@typescript-eslint/no-shadow': 'off', // @TODO
		'@typescript-eslint/no-type-alias': 'off', // @TODO
		'@typescript-eslint/no-unnecessary-type-constraint': 'error', // @AUTOFIX
		'@typescript-eslint/no-unused-expressions': 'off', // @TODO
		'@typescript-eslint/no-use-before-define': 'off', // @TODO
		'@typescript-eslint/no-useless-constructor': 'off', // @TODO
		'@typescript-eslint/prefer-enum-initializers': 'off', // @TODO
		'@typescript-eslint/prefer-for-of': 'off', // @TODO
		'@typescript-eslint/prefer-function-type': 'warn', // @AUTOFIX
		'@typescript-eslint/prefer-literal-enum-member': 'off', // @TODO
		'@typescript-eslint/prefer-optional-chain': 'off', // @TODO
		'@typescript-eslint/prefer-ts-expect-error': 'warn', // @AUTOFIX
		'@typescript-eslint/sort-type-union-intersection-members': 'warn', // @AUTOFIX
		'@typescript-eslint/typedef': 'off', // @TODO
		'@typescript-eslint/unified-signatures': 'off', // @TODO

		// @TODO: Check the rules recommended by @typescript-eslint/eslint-plugin
		// and determine whether they require an override. If not, remove them
		// here. Note that some eslint rules are turned off because they're
		// redundant or incompatible with TypeScript.
		// '@typescript-eslint/adjacent-overload-signatures': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/ban-ts-comment': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/ban-types': 'error', // @TODO @RECOMMENDED @AUTOFIX
		// '@typescript-eslint/explicit-module-boundary-types': 'warn', // @TODO @RECOMMENDED
		// 'no-array-constructor': 'off', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-array-constructor': 'error', // @TODO @RECOMMENDED @AUTOFIX
		// 'no-empty-function': 'off', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-empty-function': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-empty-interface': 'error', // @TODO @RECOMMENDED @AUTOFIX
		// '@typescript-eslint/no-explicit-any': 'warn', // @TODO @RECOMMENDED @AUTOFIX
		// '@typescript-eslint/no-extra-non-null-assertion': 'error', // @TODO @RECOMMENDED @AUTOFIX
		// '@typescript-eslint/no-inferrable-types': 'error', // @TODO @RECOMMENDED @AUTOFIX
		// '@typescript-eslint/no-misused-new': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-namespace': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-non-null-asserted-optional-chain': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-non-null-assertion': 'warn', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-this-alias': 'error', // @TODO @RECOMMENDED
		// 'no-unused-vars': 'off', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-unused-vars': 'warn', // @TODO @RECOMMENDED
		// '@typescript-eslint/no-var-requires': 'error', // @TODO @RECOMMENDED
		// '@typescript-eslint/prefer-as-const': 'error', // @TODO @RECOMMENDED @AUTOFIX
		// '@typescript-eslint/prefer-namespace-keyword': 'error', // @TODO @RECOMMENDED @AUTOFIX
		// '@typescript-eslint/triple-slash-reference': 'error', // @TODO @RECOMMENDED

		// @TODO: The following rules have been adjusted by the recommended
		// config because they are redundant for TS. Verify that they can stay
		// off.
		// 'constructor-super': 'off', // ts(2335) & ts(2377) // @TODO @RECOMMENDED
		// 'getter-return': 'off', // ts(2378) // @TODO @RECOMMENDED
		// 'no-const-assign': 'off', // ts(2588) // @TODO @RECOMMENDED
		// 'no-dupe-args': 'off', // ts(2300) // @TODO @RECOMMENDED
		// 'no-dupe-class-members': 'off', // ts(2393) & ts(2300) // @TODO @RECOMMENDED
		// 'no-dupe-keys': 'off', // ts(1117) // @TODO @RECOMMENDED
		// 'no-func-assign': 'off', // ts(2539) // @TODO @RECOMMENDED
		// 'no-import-assign': 'off', // ts(2539) & ts(2540) // @TODO @RECOMMENDED
		// 'no-new-symbol': 'off', // ts(2588) // @TODO @RECOMMENDED
		// 'no-obj-calls': 'off', // ts(2349) // @TODO @RECOMMENDED
		// 'no-redeclare': 'off', // ts(2451) // @TODO @RECOMMENDED
		// 'no-setter-return': 'off', // ts(2408) // @TODO @RECOMMENDED
		// 'no-this-before-super': 'off', // ts(2376) // @TODO @RECOMMENDED
		// 'no-undef': 'off', // ts(2304) // @TODO @RECOMMENDED
		// 'no-unreachable': 'off', // ts(7027) // @TODO @RECOMMENDED
		// 'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358) // @TODO @RECOMMENDED
		// 'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more // @TODO @RECOMMENDED
		// 'prefer-const': 'error', // ts provides better types with const // @TODO @RECOMMENDED
		// 'prefer-rest-params': 'error', // ts provides better types with rest args over arguments // @TODO @RECOMMENDED
		// 'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply // @TODO @RECOMMENDED
		// 'valid-typeof': 'off', // ts(2367) // @TODO @RECOMMENDED
	},
};
