# @fontoxml/eslint-config

Opinionated [ESLint](https://eslint.org/) (and [Prettier](https://prettier.io/)) configuration used by Fonto.

## Installation

Install this package in your project as a development dependency:

```sh
npm install --save-dev @fontoxml/eslint-config
```

A handful of additional (development) dependencies are required for this configuration to work. Make sure to at least install:

- [eslint](https://www.npmjs.com/package/eslint)@9.29.0
- [prettier](https://www.npmjs.com/package/prettier)@2.6.2
- [typescript](https://www.npmjs.com/package/typescript)@5.8.3
- [globals](https://www.npmjs.com/package/globals)@14.0.0 (When using `globals.node` in your `eslint.config.js`, see examples)

This suffices for linting (most) JavaScript/TypeScript (`.js(x)` / `.ts(x)`).

# Compatibility

Specific versions of ESLint and its TypeScript plugin are compatible with a range of TypeScript versions. As Fonto Editor uses specific versions of TypeScript, make sure to use the correct version of `@fontoxml/eslint-config`:

- For Fonto Editor 8.16 and higher use `5.x.x`
- For Fonto Editor 8.15 and lower use `4.x.x`

## Usage

Using this ESLint configuration usually involves the following files:

- `eslint.config.js`

    Configuration file for ESLint which makes use of `@fontoxml/eslint-config` and adds local configuration.

- `prettier.config.js`

    Configuration for Prettier formatting rules which makes use of `@fontoxml/eslint-config`.

- `.prettierignore` To only apply prettier to the same files as the eslint config.

    Configuration for Prettier to only apply on the same files as ESLint.

- `tsconfig.json`

    The TypeScript configuration file which is used by the ESLint TypeScript rules. This guide assumes your Fonto editor instance already has a `tsconfig.json` file, which should be the case when using SDK 8.0.0 or higher.

### ESLint configuration file (`eslint.config.js`)

Simply [extend](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) `@fontoxml` in your [ESLint configuration](https://eslint.org/docs/user-guide/getting-started). The following is an example `eslint.config.js` file which extends this configuration for use in a Fonto editor instance and adds Editor repository specific configuration.

#### When using CommonJS configuration files

```javascript
const configFonto = require('@fontoxml/eslint-config');
const globals = require('globals');

module.exports = [
	{
		name: 'fontoxml/global-ignores',
		ignores: ['platform/**', '**/assets/**'],
	},
	...configFonto.default,
	{
		name: 'fontoxml/settings',
		settings: {
			// Explicitly set the React version because this repository has no
			// React dependency. Should be in sync with 'fontoxml-vendors'.
			// See: https://www.npmjs.com/package/eslint-plugin-react
			react: {
				version: '18.2.0',
			},
			// Mark imports starting with 'fontoxml-' as internal for import
			// sorting purposes.
			'import/internal-regex': '^fontoxml-',
		},
	},
	{
		name: 'fontoxml/config-files-commonjs',
		files: [
			'./dev-cms/**/*.js',
			'./config.js',
			'./eslint.config.js',
			'./prettier.config.js',
		],
		languageOptions: {
			globals: {
				...globals.node,
			},
			sourceType: 'commonjs',
		},
	},
];
```

#### When using ES Module configuration files

```javascript
import configFonto from '@fontoxml/eslint-config';
import globals from 'globals';

export default [
	{
		name: 'fontoxml/global-ignores',
		ignores: ['platform/**', '**/assets/**'],
	},
	...configFonto,
	{
		name: 'fontoxml/settings',
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
	{
		name: 'fontoxml/config-files-esm',
		files: [
			'./dev-cms/**/*.js',
			'./config.js',
			'./eslint.config.js',
			'./prettier.config.js',
		],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
];
```

This will configure all rules, and requires all peer dependencies to be installed, including the optional ones. The configuration relies on file extensions to determine which additional rules and plugins to run. For React/JSX the `.jsx` file extension is assumed and for TypeScript it's both `.ts` and `.tsx`.

### Prettier configuration file (`prettier.config.js`)

This ESLint configuration is designed to be used together with Prettier for code formatting. Configuration for Prettier is included in this packages, and can be used By creating a `prettier.config.js` file in your project next to the `eslint.config.js` file. The following is an example `prettier.config.js` file in which the configuration is used as-is:

#### When using CommonJS configuration files

```javascript
const fontoPrettierConfig = require('@fontoxml/eslint-config/prettier.config.js');

module.exports = {
	...fontoPrettierConfig.default,
};
```

#### When using ES Module configuration files

```javascript
import fontoPrettierConfig from '@fontoxml/eslint-config/prettier.config.js';

export default {
	...fontoPrettierConfig,
};
```

### Prettier ignore file (`.prettierignore`)

To make sure it only applies to the same files as the ESLint setup applies, also create a `.prettierignore` file:

```text
platform/**
**/assets/**
```

## VSCode configuration

Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions. There are also some settings which improve the developer experience and align with the ESLint en prettier configuration.

This can be achieved by creating the following files in the project, restarting VSCode and accepting to install the extensions.

### Recommended extensions (`.vscode/extensions.json`)

```json
{
	"recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
```

### Recommended settings (`.vscode/settings.json`)

```json
{
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit"
	},
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.formatOnSave": true,
	"editor.insertSpaces": false,
	"editor.rulers": [80, 100],

	"eslint.format.enable": false,
	"eslint.useFlatConfig": true,

	"files.eol": "\n",

	"prettier.requireConfig": true,

	"search.exclude": {
		// These files should never be edited via this project.
		"dist/**": true,
		"node_modules/**": true,
		"platform/**": true,
		"platform-linked/**": true
	},
	"search.useIgnoreFiles": false,

	"typescript.tsdk": "node_modules/typescript/lib",
	"typescript.enablePromptUseWorkspaceTsdk": true
}
```

## Troubleshooting

### Migrating between major versions

1. Upgrade to the new `@fontoxml/eslint-config` version.
1. Remove all required peer dependencies of the old `@fontoxml/eslint-config` version
1. Install all required peer dependencies of the new `@fontoxml/eslint-config` version using the correct versions
1. Remove `node_modules`, and run `npm install` again. There are known issues when not doing so when upgrading

### Configuration not working for a Fonto Editor

- Follow version migration troubleshooting
- Check the configuration files
    - All configuration files are present, including `tsconfig.json`
    - The configuration files should be placed next to `config/`, `packages/`, `platform/`, `config.js(on)`, `manifest.json`, `tsconfig.json` etc.
    - Check if you should use CommonJS or ES Module. This depends on the ["type"](https://nodejs.org/api/packages.html#type) property in `package.json`
    - Check if the configuration files are correct, see examples
- Check there is no other (global) ESLint installations and/or configuration in scope conflicting with this configuration
- When using VSCode
    - Add `.vscode/extensions.json` and `.vscode/settings.json` to the project
    - Either restart VSCode or run `>Developer: Restart Extension Host`
    - Make sure VSCode is using the `Workspace` version of TypeScript
    - Make sure VSCode is up to date. Requires at least `1.101.0` due to it shipping with a compatible nodejs version.
- Check if you are using a compatible Node.js version, which is likely any non end-of-life LTS version of Node.js
