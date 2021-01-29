# @fontoxml/eslint-config

[ESLint](https://eslint.org/) (and [Prettier](https://prettier.io/)) configuration used by Fonto.

## Installation

Install this package in your project as a development dependency:

```sh
npm install --save-dev @fontoxml/eslint-config
```

A handful of additional (development) dependencies are required for this configuration to work. Make sure to at least install:

-   [eslint](https://www.npmjs.com/package/eslint)@7.19.0
-   [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@2.22.1
-   [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)@3.3.1
-   [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)@7.0.0
-   [prettier](https://www.npmjs.com/package/prettier)@2.2.1

This suffices for linting JavaScript (`.js`) (ES2020).

If you like to use this configuration to lint React/JSX (`.jsx`), also install the following:

-   [@babel/eslint-plugin](https://www.npmjs.com/package/@babel/eslint-plugin)@7.12.13
-   [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)@6.4.1
-   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@7.22.0
-   [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@4.2.0

And for TypeScript (`.ts` and `.tsx`):

-   [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)@4.15.0
-   [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@2.3.0

For Jest:

-   [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)@24.1.3

## Usage

Simply [extend](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) `@fontoxml` in your [ESLint configuration](https://eslint.org/docs/user-guide/getting-started). The following is an example `.eslintrc.js` file which extends this configuration:

```javascript
module.exports = {
	extends: ['@fontoxml'],
	root: true
};
```

The configuration relies on file extensions to determine which additional rules and plugins to run. For React/JSX the `.jsx` file extension is assumed, for TypeScript it's both `.ts` and `.tsx`, and for Jest filenames ending in `.test.js`.

## Advanced usage

It's also possible to pick and choose specific parts of the configuration. The following example `.eslintrc.js` file includes all parts:

```javascript
module.exports = {
	extends: [
		'@fontoxml/eslint-config/base',
		'@fontoxml/eslint-config/jest',
		'@fontoxml/eslint-config/react',
		'@fontoxml/eslint-config/typescript',
		'@fontoxml/eslint-config/typeinfo' // ⚠️ Requires configuration, see below.
	],
	root: true
};
```

It's recommended to always include the `base` configuration, as the other parts are configured to extend it.

## Linting with type information

Some TypeScript ESLint rules rely on the availability of type information, and require additional configuration to work properly. These rules are disabled by default, and can be enabled by extending the `typeinfo` part of the configuration. The following example `.eslintrc.js` file demonstrates this setup:

```javascript
module.exports = {
	extends: ['@fontoxml', '@fontoxml/eslint-config/typeinfo'],
	parserOptions: {
		project: '<PATH_TO_TSCONFIG>'
	},
	root: true
};
```

Please note that configuring the `parserOptions.project` option is required for this setup. Please refer to [TypeScript ESLint parser's documentation](https://www.npmjs.com/package/@typescript-eslint/parser) for guidance on configuring it.

## Prettier

Prettier is configured for code formatting, and runs as an autofixable ESLint rule. If you like to use the same Prettier configuration for file types not in scope of this configuration (e.g. HTML, Markdown), you can import it directly from this package. The following is an example `.prettierrc.js` file in which the configuration is used as-is:

```javascript
module.exports = require('@fontoxml/eslint-config/prettier');
```

## Extending and/or overriding rules

Please refer to [ESLint's configuration guide](https://eslint.org/docs/user-guide/configuring/) and its guide for [extending configuration](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) to extend and/or override rules defined by this configuration.
