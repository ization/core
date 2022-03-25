import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IzTranslateModule } from '@ization/translate';
import { IzTemporalModule } from '@ization/temporal';
import { IzMomentModule } from '@ization/moment';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,

    IzTranslateModule,
    IzTemporalModule,
    IzMomentModule,
  ],
})
export class SharedModule {}
