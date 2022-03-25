import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreDemoModule } from './core-demo/core-demo.module';
import { TranslateDemoModule } from './translate-demo/translate-demo.module';
import { TemporalDemoModule } from './temporal-demo/temporal-demo.module';
import { MomentDemoModule } from './moment-demo/moment-demo.module';

import { IzCoreModule, IzLocaleDefinition } from '@ization/core';
import { IzTranslateModule } from '@ization/translate';
import { IzTemporalModule } from '@ization/temporal';
import { IzMomentModule } from '@ization/moment';

const LOCALES: IzLocaleDefinition[] = [
  {localeCode: 'cs-CZ', translateLocaleCode: 'cs'}, // Czech
  {localeCode: 'cs-x-japan', translateLocaleCode: 'cs', temporalLocaleCode: 'cs-CZ-u-ca-japanese', momentLocaleCode: 'cs'}, // Czech with Japanese imperial calendar via custom locale code
  {localeCode: 'ja'}, // Japanese
  {localeCode: 'ja-JP-u-ca-japanese', translateLocaleCode: 'ja'}, // Japanese with Japanese imperial calendar
  {localeCode: 'en-GB', translateLocaleCode: 'en'}, // English with British formatting
  {localeCode: 'en-US'}, // English with American formatting
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    IzCoreModule.withLocales(LOCALES),
    IzTranslateModule.withConfig({
      fallbackLocaleCode: 'en',
      translationLoader: async locale => await import(
        /* webpackInclude: /\.js$/ */
        /* webpackChunkName: "translations-[request]" */
        `../translations/${locale}`
      ).catch(() => ({})),
    }),
    IzTemporalModule,
    IzMomentModule,

    CoreDemoModule,
    TemporalDemoModule,
    TranslateDemoModule,
    MomentDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
