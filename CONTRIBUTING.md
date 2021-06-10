# Contributing

Everyone is welcome to suggest changes to the configured rules and settings, suggest new plugins, and update dependencies. The configuration is intended to be kept compatible with a variety of projects, which is one of the reasons why it's set up to work in a somewhat modular fashion. Do keep in mind that ultimately it's an opiniated configuration tailored to the needs of Fonto's developers.

## General notes

-   This package carefully defines exact (peer) dependency versions to guarantee compatability between all components. This is intentional. It might be relaxed in the future.
-   The dependency versions in `package.json` should be kept in sync with the `README.md`.
-   Although unnecessary for linting the configuration itself, this package has _all_ of its peer dependencies listed as development dependencies. There are two reasons for this:
    1.  For [eslint-find-rules](https://www.npmjs.com/package/eslint-find-rules) to find unconfigured and deprecated rules (`npm run test`).
    2.  To catch dependency version conflicts early on.

## Adding/modifying rules

-   After upgrading dependencies, run `npm run test` to find unconfigured and deprecated rules. Also check release notes for breaking changes, especially when upgrading to new major versions.
-   Always check that a rule does not conflict with any of the used plugins.
-   Keep in mind that a rule sometimes requires that another rule is turned off.
-   Rules already defined by plugins and/or recommended configuration are omitted, unless overridden.
-   Consider using `warn` for autofixable and codestyle-related rules. Use `error` for the more serious issues.
-   Keep ordering and filetype overrides in mind when determining where to define a rule and when it should apply.

## Rule annotations

The following annotations are used in inline trailing comments:

-   `@AUTOFIX`: for autofixable rules.
-   `@PRETTIER`: for rules turned off by [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#special-rules) that are carefully enabled again.
-   `@RECOMMENDED`: for rules (already) defined by recommended configuration.
-   `@TODO`: for rules that need to be verified and/or configured.

In addition, some rules benefit from an explanatory leading comment:

-   `// Override: <reason>.`
-   `// Turned off for <plugin name>.`

## ESLint intricacies

-   ESLint plugins should _always_ be peer dependencies for shared configuration due to the way ESLint resolves import locations of plugins.
    -   See: https://github.com/eslint/eslint/issues/3458
    -   See: https://github.com/eslint/rfcs/tree/main/designs/2019-config-simplification
-   `overrides` defined in ESLint configuration _deeply merge_ with any other matching configuration. This is not unambiguously documented by ESLint.
    -   See: https://github.com/eslint/eslint/issues/13585
