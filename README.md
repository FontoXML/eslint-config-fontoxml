# @fontoxml/eslint-config

Opiniated [ESLint](https://eslint.org/) (and [Prettier](https://prettier.io/)) configuration used by Fonto.

## Installation

Install this package in your project as a development dependency:

```sh
npm install --save-dev @fontoxml/eslint-config
```

A handful of additional (development) dependencies are required for this configuration to work. Make sure to at least install:

-   [@babel/eslint-plugin](https://www.npmjs.com/package/@babel/eslint-plugin)@7.13.16
-   [eslint](https://www.npmjs.com/package/eslint)@7.27.0
-   [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)@8.3.0
-   [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@2.23.3
-   [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)@3.4.0
-   [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)@7.0.0
-   [prettier](https://www.npmjs.com/package/prettier)@2.3.0

This suffices for linting (most) JavaScript (`.js`).

If you like to use this configuration to lint React/JSX (`.jsx`), also install the following:

-   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@7.23.2
-   [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@4.2.0

And for TypeScript (`.ts` and `.tsx`):

-   [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)@4.15.0
-   [typescript](https://www.npmjs.com/package/typescript)@4.3.2

## Usage

Simply [extend](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) `@fontoxml` in your [ESLint configuration](https://eslint.org/docs/user-guide/getting-started). The following is an example `.eslintrc.js` file which extends this configuration:

```javascript
module.exports = {
	extends: ['@fontoxml'],
	root: true,
};
```

This will configure all rules except those requiring additional configuration (see below), and requires all peer dependencies to be installed, including the optional ones. The configuration relies on file extensions to determine which additional rules and plugins to run. For React/JSX the `.jsx` file extension is assumed and for TypeScript it's both `.ts` and `.tsx`.

## Advanced usage

It's also possible to pick and choose specific parts of the configuration. The following example `.eslintrc.js` file includes all parts in their intended order:

```javascript
module.exports = {
	extends: [
		'@fontoxml/eslint-config/base',
		'@fontoxml/eslint-config/react',
		'@fontoxml/eslint-config/typescript',
		'@fontoxml/eslint-config/typeinfo', // ⚠️ Requires configuration, see below.
	],
	root: true,
};
```

It's recommended to always include the `base` configuration, as the other parts are configured to extend it. Extending the parts in a different order might cause issues.

## Linting with type information

Some TypeScript ESLint rules rely on the availability of type information, and require additional configuration to work properly. These rules are disabled by default, and can be enabled by extending the `typeinfo` part of the configuration. The following example `.eslintrc.js` file demonstrates this setup:

```javascript
module.exports = {
	extends: ['@fontoxml', '@fontoxml/eslint-config/typeinfo'],
	parserOptions: {
		project: '<PATH_TO_TSCONFIG>',
	},
	root: true,
};
```

Please note that configuring the `parserOptions.project` option is required for this setup. Please refer to [TypeScript ESLint parser's documentation](https://www.npmjs.com/package/@typescript-eslint/parser) for guidance on configuring it.

## Prettier

Prettier is configured for code formatting, and runs as an autofixable ESLint rule. If you like to use the same Prettier configuration for file types not in scope of this configuration (e.g. HTML, Markdown), you can import it directly from this package. The following is an example `.prettierrc.js` file in which the configuration is used as-is:

```javascript
module.exports = require('@fontoxml/eslint-config/prettier');
```

## Extending and/or overriding configuration

Please refer to [ESLint's configuration guide](https://eslint.org/docs/user-guide/configuring/) and its guide for [extending configuration](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) to extend and/or override rules defined by this configuration. Also note that in addition to the rules, some of the included plugins have settings that may need to be adjusted for your project.
