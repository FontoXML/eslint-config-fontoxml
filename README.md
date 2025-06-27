# @fontoxml/eslint-config

Opinionated [ESLint](https://eslint.org/) (and [Prettier](https://prettier.io/)) configuration used by Fonto.

## Installation

Install this package in your project as a development dependency:

```sh
npm install --save-dev @fontoxml/eslint-config
```

A handful of additional (development) dependencies are required for this configuration to work. Make sure to at least install:

-   [eslint](https://www.npmjs.com/package/eslint)@9.29.0
-   [prettier](https://www.npmjs.com/package/prettier)@2.6.2
-   [typescript](https://www.npmjs.com/package/typescript)@5.8.3

This suffices for linting (most) JavaScript/TypeScript (`.js`/`.ts`).

## Usage

Simply [extend](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) `@fontoxml` in your [ESLint configuration](https://eslint.org/docs/user-guide/getting-started). The following is an example `eslint.config.js` file which extends this configuration for use in a Fonto editor instance. Note that this assumes your Fonto editor instance has a `tsconfig.json` file, which should be the case when using SDK 8.0.0 or higher.

```javascript
import configFonto from '@fontoxml/eslint-config';

export default [
	...configFonto,
	{
		ignores: ['platform/**', '**/assets/**'],
		settings: {
			// Explicitly set the React version because this
			// repository has no React dependency. Should be 
			// in sync with 'fontoxml-vendors'.
			// See: https://www.npmjs.com/package/eslint-plugin-react
			react: {
				version: '18.2.0',
			},
			// Mark imports starting with 'fontoxml-' as internal 
			// for import sorting purposes.
			'import/internal-regex': '^fontoxml-',
		},
	},
];
```

This will configure all rules, and requires all peer dependencies to be installed, including the optional ones. The configuration relies on file extensions to determine which additional rules and plugins to run. For React/JSX the `.jsx` file extension is assumed and for TypeScript it's both `.ts` and `.tsx`.

## Prettier

This ESLint configuration is designed to be used together with Prettier for code formatting. Configuration for Prettier is included in this packages, and can be used By creating a `prettier.config.js` file in your project next to the `eslint.config.js` file. The following is an example `prettier.config.js` file in which the configuration is used as-is:

```javascript
import fontoPrettierConfig from '@fontoxml/eslint-config/prettier.config.js';

export default {
	...fontoPrettierConfig,
};
```

To make sure it only applies to the same files as the ESLint setup applies, also create a `.prettierignore` file:
```
platform/**
**/assets/**
```
