# @fontoxml/eslint-config

ESLint and prettier configuration for Fonto platform and projects.

## How to use

Install eslint and the Fonto configuration package:

```
npm i -g babel-eslint@10.0.1 eslint@5.16.0 @fontoxml/eslint-config eslint-config-prettier@4.3.0 eslint-plugin-prettier@3.1.0 eslint-plugin-react@7.13.0 prettier@1.17.1
```

Create an `.eslintrc` file extending the Fonto configuration somewhere in your project folder or in an ancestor:

```
{
	"extends": [ "@fontoxml" ]
}
```
