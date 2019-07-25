module.exports = {
	// --- ESLINT ---

	// Do not use == and != (just be explicit when you allow multiple values)
	'eqeqeq': ['error', 'always'],

	// Do not use arguments.caller / arguments.callee (forbidden in strict mode)
	'no-caller': 'error',

	// Class var reassignment pattern is used when applying higher-order React components
	'no-class-assign': 'off',

	// Console errors / warnings can help trace issues, but console logs should be removed
	'no-console': ['error', { allow: ['warn', 'error'] }],

	// Else after an if that returns introduces unnecessary indentation
	'no-else-return': 'error',

	// eval is evil, especially when hidden, use new Function() if you really have to
	'no-eval': 'error',
	'no-implied-eval': 'error',

	// Don't reassign native / read-only globals
	'no-global-assign': 'error',

	// Easy enough to hide using higher-order functions, but still usually a code smell that can be avoided
	'no-loop-func': 'warn',

	// Disallow the following global variables
	'no-restricted-globals': ['error', 'document', 'error', 'event', 'fdescribe', 'status'],

	// Shadowing variables currently may cause issues in Fonto's build tools
	'no-shadow': ['error', { builtinGlobals: true, hoist: 'all', allow: [] }],

	// But shadowing of things like NaN or undefined is just stupid
	'no-shadow-restricted-names': 'error',

	// Expression in statement position is usually a mistake
	'no-unused-expressions': 'warn',

	// Vars should be used, unless they are starting with _
	'no-unused-vars': [
		'error',
		{
			args: 'all',
			argsIgnorePattern: '^_',
			caughtErrors: 'all',
			caughtErrorsIgnorePattern: '^_',
			vars: 'all',
			varsIgnorePattern: '^_'
		}
	],

	// Be explicit if a var can be undefined at first use
	'no-use-before-define': 'error',

	// Using 'with' only obfuscates code
	'no-with': 'error',

	// Prefer const instead of let if a variable is not reassigned
	'prefer-const': 'error',

	// Always require a radix for parseInt
	'radix': ['error', 'always'],

	// --- LET'S EXPERIMENT ---

	// Check JSDoc comments
	'valid-jsdoc': [
		'warn',
		{
			// instead of ${key}, use ${value}
			prefer: {
				arg: 'param',
				argument: 'param',
				returns: 'return',
				virtual: 'abstract'
			},
			// instead of ${key}, use ${value}
			preferType: {
				'*': 'any',
				'Boolean': 'boolean',
				'Number': 'number',
				'String': 'string',
				//	'Array': 'Type[]',
				//	'array': 'Type[]',
				//	'Object': '{key: Type}',
				//	'object': '{key: Type}',
				'Function': 'function(Type, Type): Type',
				'function': 'function(Type, Type): Type'
			},
			// Only require @return if the function contains a return statement
			requireReturn: false,
			requireParamDescription: false,
			requireReturnDescription: false
		}
	]
};
