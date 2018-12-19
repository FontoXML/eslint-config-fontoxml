# eslint-config-fontoxml

ESLint configuration for FontoXML platform and projects.

## How to use

Install eslint and the fontoxml configuration package:

```
npm i -g eslint eslint-config-fontoxml eslint-plugin-react
```

Create an `.eslintrc` file extending the FontoXML configuration somewhere in your project folder or in an ancestor:

```
{
	"extends": [ "fontoxml" ]
}
```

## Optional: use the Prettier code formatter

In order to use [Prettier](https://www.npmjs.com/package/prettier) to automatically format your
code we provide an optional config. Note that this currently only formats React code (all .jsx.js
files), regular .js files won't be formatted.

```
npm i -g babel-eslint eslint-config-prettier eslint-plugin-prettier
```

Extend the Prettier configuration in the existing .eslintrc file (created in the previous step), so
that it looks like the following:

```
{
	"extends": [ "fontoxml", "fontoxml/prettier" ]
}
```
