module.exports = {
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},

	settings: {
		react: {
			version: '16.0.0'
		}
	},

	env: {
		amd: true,
		browser: true,
		es6: true,
		mocha: true,
		node: true
	},

	globals: {
		chai: true,
		sinon: true
	},

	plugins: ['react'],

	extends: ['eslint:recommended', 'plugin:react/recommended'],

	rules: {
		// --- BUILT-IN RULES ---

		// Do not use == and != (just be explicit when you allow multiple values)
		'eqeqeq': ['error', 'always'],

		// Do not use arguments.caller / arguments.callee (forbidden in strict mode)
		'no-caller': 'error',

		// Class var reasignment pattern is used when applying higher-order React components
		'no-class-assign': 'off',

		// Console errors / warnings can help trace issues
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

		// Vars starting with _ are unused
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

		// --- STYLE ---
		// All set to 'warn' for now...

		// Egyptian braces, with else, catch and finally on new line
		'brace-style': ['warn', 'stroustrup'],

		// Dangling commas are not allowed
		'comma-dangle': ['warn', 'never'],

		// Use space after each comma, not before
		'comma-spacing': ['warn', { before: false, after: true }],

		// Place commas at the end of the line, not the start
		'comma-style': ['warn', 'last'],

		// Always use curly braces
		'curly': ['warn', 'all'],

		// End files with a newline
		'eol-last': 'warn',

		// Never use a space before the parentheses in a function call
		'func-call-spacing': ['warn', 'never'],

		// Write generator functions as function* name, not function *name
		'generator-star-spacing': ['warn', { before: false, after: true }],

		// Use space after the colon in object literals, not before
		'key-spacing': ['warn', { beforeColon: false, afterColon: true }],

		// Require spaces around keywords
		'keyword-spacing': ['warn', { before: true, after: true }],

		// Constructors should start with a capital letter
		'new-cap': 'warn',

		// Constructor calls should always use parentheses
		'new-parens': 'warn',

		// Disallow Array constructor except with a single argument, just use literals otherwise
		'no-array-constructor': 'warn',

		// Inline comments often look messy, just place them on the line above
		'no-inline-comments': 'warn',

		// Use else if instead of if in else block to prevent unnecessary nesting
		'no-lonely-if': 'warn',

		// Keep whitespace simple
		'no-mixed-spaces-and-tabs': 'warn',
		'no-multi-spaces': 'warn',
		'no-trailing-spaces': 'warn',

		// Just use a literal
		'no-new-object': 'warn',

		// Using a ternary to get a boolean is silly
		'no-unneeded-ternary': 'warn',

		// Always use space in single-line object literals
		'object-curly-spacing': ['warn', 'always'],

		// Break lines after an operator, not before
		'operator-linebreak': ['warn', 'after'],

		// Only quote properties when necessary for any of them
		'quote-props': ['warn', 'consistent-as-needed'],

		// Use single quotes, but allow for template literals when necessary
		'quotes': ['warn', 'single', { allowTemplateLiterals: true }],

		// Never depend on automatic semicolon insertion
		'semi': ['warn', 'always'],

		// Use space after semicolon, not before
		'semi-spacing': ['warn', { before: false, after: true }],

		// Always use space before a block
		'space-before-blocks': ['warn', 'always'],

		// Always use a space in function definitions, to distinguish from calls
		'space-before-function-paren': ['warn', 'always'],

		// Use spaces around infix operators
		'space-infix-ops': ['warn'],

		// Use spaces around unary operators that are words
		'space-unary-ops': ['warn', { words: true, nonwords: false }],

		// Use space next to comment delimiters
		'spaced-comment': ['warn', 'always'],

		// Wrap IIFE in parentheses around the function, before the call (apparently good for loading performance too)
		'wrap-iife': ['warn', 'inside'],

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
		],

		// --- REACT ---

		// There are good use cases for using findDOMNode
		'react/no-find-dom-node': 'off',

		// We don't validate props yet
		'react/prop-types': 'off'
	}
};
