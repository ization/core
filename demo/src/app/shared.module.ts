import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IzCoreModule, IzLocaleDefinition } from '@ization/core';
import { IzTemporalModule } from '@ization/temporal';

const LOCALES: IzLocaleDefinition[] = [
  {localeCode: 'cs-CZ'}, // Czech
  {localeCode: 'cs-x-japan', temporalLocaleCode: 'cs-CZ-u-ca-japanese'}, // Czech with Japanese imperial calendar via custom locale code
  {localeCode: 'ja'}, // Japanese
  {localeCode: 'ja-JP-u-ca-japanese'}, // Japanese with Japanese imperial calendar
  {localeCode: 'en-GB'}, // English with British formatting
  {localeCode: 'en-US'}, // English with America formatting
];

@NgModule({
  imports: [
    IzCoreModule.withLocales(LOCALES),
    IzTemporalModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    IzCoreModule,
    IzTemporalModule,
  ],
})
export class SharedModule {}
