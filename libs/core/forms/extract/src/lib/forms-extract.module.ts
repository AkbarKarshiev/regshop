import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegshopExtractFormControlPipe } from './extract-form-control.pipe';
import { RegshopExtractFormGroupPipe } from './extract-form-group.pipe';
import { ExtractTouchedDirective } from './extract-touched.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RegshopExtractFormControlPipe,
    RegshopExtractFormGroupPipe,
    ExtractTouchedDirective
  ],
})
export class FormsExtractModule {}
