# @ization/core

> ization core that manages all plugins

## Install

Install ization system using Angular CLI (installs ization core and lets you pick ization plugins you want to install, then automatically adds ization code into your project):

```sh
npx ng add @ization/core
```

Alternatively, you can use your favourite package manager. If you use one that installs peer dependencies automatically (e.g. npm ≥7), you can simply install this package (and any other ization packages you want):

```sh
npm install @ization/core
```

Otherwise, you need to install peer dependencies yourself (e.g. npm ≤6) in addition to installing this package. Don't forget to have a look at Readmes of other packages you are going to install as well. Output of `npm install` can help you manage your peer dependencies.

```sh
npm install @ization/core lodash
```

### Version Compatibility

If you want to be safe, use the same version for all ization packages. But if needed, ization follows semver so it is also possible to run different versions of packages:

`@ization/core` | Angular | `lodash`
:-: | :-: | :-:
1 - 2 | >= 11 | 4

In such case, also consult Readmes of ization plugins to check their own version compatibility.

## Configure

Installing ization using Angular CLI automatically adds default configuration code into your project so you can start right away.

If you do not use Angular CLI: Import the main module of this package into your app module using `IzCoreModule.withLocales` static method and define locales to be used by this package:

```typescript
@NgModule({
  imports: [
    ...
    IzCoreModule.withLocales([
      {localeCode: 'en'},
      ...
    ]),
    ...
  ],
  ...
})
export class AppModule {}
```

This package does nothing interesting on its own. The actual functionality is provided by plugins. See their docs for more info.

## Use

### `IzCoreService` Service

This service handles locales and their preference. Supported locales are sorted in this way:

1. User's preferred locale – User can have one locale configured to be the most preferred
1. Locales preferred by user's browser
1. Other supported locales

#### `getPreferredLocaleCode()` method

Returns locale code of user's preferred locale or `undefined` if none is selected.

#### `preferLocaleCode(localeCode)` method

Sets locale code as user's preferred locale and saves it for future use.

#### `clearLocaleCodePreference()` method

Clears any saved user's preferred locale.

#### `getLocalePreferenceChanged()` method

Returns an Observable that emits (with no value) each time user's preference changes.

#### `getLocaleCodesInOrderOfPreference()` method

Returns an Observable that emits an array of locale codes each time user's preference changes.

#### `getLocaleDefinitionsInOrderOfPreference()` method

Returns an Observable that emits an array of locale definitions, including any plugin overrides, each time user's preference changes.

## Develop

### Build

Run `npm run build:core` to build the package into the `dist/core/` directory.

### Unit tests

Run `npm run test:core` to execute the unit tests.

### Linter

Run `npm run lint:core` to run linter on all code, including spec files.

## License

This library is licensed under [Parity 7.0.0](https://github.com/ization/ization/blob/latest/LICENSE.md) license. If you want to use this library in open source projects, go ahead, it's completely free! If you'd rather keep your code closed, you have 30 days to try the library in your project, then you need to buy a private license. Have a look at [GitHub Sponsors](https://github.com/sponsors/katemihalikova) or contact me directly at <get@ization.dev> to negotiate a deal.
