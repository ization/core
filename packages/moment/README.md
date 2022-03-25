# @ization/moment

> ization plugin for date/time formatting of ISO strings or `moment` instances

## Install

Install ization system using Angular CLI (installs ization core and lets you pick ization plugins you want to install, then automatically adds ization code into your project):

```sh
npx ng add @ization/core
```

Alternatively, you can use your favourite package manager. If you use one that installs peer dependencies automatically (e.g. npm ≥7), you can simply install this package together with core package (and any other ization packages you want):

```sh
npm install @ization/core @ization/moment
```

Otherwise, you need to install peer dependencies yourself (e.g. npm ≤6) in addition to installing this package. Don't forget to have a look at Readmes of other packages you are going to install as well. Output of `npm install` can help you manage your peer dependencies.

```sh
npm install @ization/core @ization/moment lodash moment
```

### Version Compatibility

If you want to be safe, use the same version for all ization packages. But if needed, ization follows semver so it is also possible to run different versions of packages:

`@ization/moment` | `@ization/core` | Angular | `moment`
:-: | :-: | :-: | :-:
2 | 1 - 2 | >= 11 | ^2.13.0
1 | 1 | >= 11 | ^2.13.0

## Configure

Installing ization using Angular CLI automatically adds default configuration code into your project so you can start right away.

If you do not use Angular CLI: Configure `@ization/core` first. Then, import the main module of this plugin into your app module using `IzMomentModule`:

```typescript
@NgModule({
  imports: [
    ...
    IzMomentModule,
    ...
  ],
  ...
})
export class AppModule {}
```

Optionally, you can provide your own formats for each pipe. To do that, import this plugin using `IzMomentModule.withCustomFormats` static method instead:

```typescript
@NgModule({
  imports: [
    ...
    IzMomentModule.withCustomFormats(myFormats),
    ...
  ],
  ...
})
export class AppModule {}
```

You can override locale code used by this plugin in `IzCoreModule.withLocales` object via `momentLocaleCode` property.

## Use

### `izMDate` Pipe

> `input | izMDate: format`

* `input` - Date ISO string, date-time ISO string, or `moment` instance to localize.
* `format` - Format to use. Can be either one of strings `'short' | 'medium' | 'long'` or an arbitrary string with [`moment#format`](https://momentjs.com/docs/#/displaying/format/) tokens.

Returns string that represents the input localized as a date. Until `@ization/core` is initialized, returns empty string. When invalid input is provided, returns `'Invalid date'` string.

### `izMTime` Pipe

> `input | izMTime: format`

* `input` - Time ISO string, date-time ISO string, or `moment` instance to localize.
* `format` - Format to use. Can be either one of strings `'short' | 'medium' | 'long'` or an arbitrary string with [`moment#format`](https://momentjs.com/docs/#/displaying/format/) tokens.

Returns string that represents the input localized as a time. Until `@ization/core` is initialized, returns empty string. When invalid input is provided, returns `'Invalid date'` string.

### `izMDateTime` Pipe

> `input | izMDateTime: format`

* `input` - Date-time ISO string or `moment` instance to localize.
* `format` - Format to use. Can be either one of strings `'short' | 'medium' | 'long'` or an arbitrary string with [`moment#format`](https://momentjs.com/docs/#/displaying/format/) tokens.

Returns string that represents the input localized as a date & time. Until `@ization/core` is initialized, returns empty string. When invalid input is provided, returns `'Invalid date'` string.

### `izMYearMonth` Pipe

> `input | izMYearMonth: format`

* `input` - Year-month ISO string, date ISO string, date-time ISO string, or `moment` instance to localize.
* `format` - Format to use. Can be either one of strings `'short' | 'medium' | 'long'` or an arbitrary string with [`moment#format`](https://momentjs.com/docs/#/displaying/format/) tokens.

Returns string that represents the input localized as a year & month. Until `@ization/core` is initialized, returns empty string. When invalid input is provided, returns `'Invalid date'` string.

### `izMWeekday` Pipe

> `input | izMWeekday: format`

* `input` - Date ISO string, date-time ISO string, or `moment` instance to localize.
* `format` - Format to use. Can be either one of strings `'short' | 'medium' | 'long'` or an arbitrary string with [`moment#format`](https://momentjs.com/docs/#/displaying/format/) tokens.

Returns string that represents the input localized as a weekday. Until `@ization/core` is initialized, returns empty string. When invalid input is provided, returns `'Invalid date'` string.

## Develop

### Build

Run `npm run build:moment` to build the package into the `dist/moment/` directory.

### Unit tests

Run `npm run test:moment` to execute the unit tests.

### Linter

Run `npm run lint:moment` to run linter on all code, including spec files.

## License

This library is licensed under [Parity 7.0.0](https://github.com/ization/ization/blob/latest/LICENSE.md) license. If you want to use this library in open source projects, go ahead, it's completely free! If you'd rather keep your code closed, you have 30 days to try the library in your project, then you need to buy a private license. Have a look at [GitHub Sponsors](https://github.com/sponsors/katemihalikova) or contact me directly at <get@ization.dev> to negotiate a deal.
