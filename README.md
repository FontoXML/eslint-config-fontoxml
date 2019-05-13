# eslint-config-fontoxml

ESLint and prettier configuration for Fonto platform and projects.

## How to use

Install eslint and the Fonto configuration package:

```
npm i -g babel-eslint eslint eslint-config-fontoxml eslint-config-prettier eslint-plugin-prettier eslint-plugin-react
```

Create an `.eslintrc` file extending the Fonto configuration somewhere in your project folder or in an ancestor:

```
{
	"extends": [ "fontoxml", "fontoxml/prettier" ]
}
```
