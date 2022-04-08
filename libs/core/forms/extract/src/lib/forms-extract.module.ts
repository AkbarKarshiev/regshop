import { NgModule } from '@angular/core';

import { RegshopExtractFormControlPipe } from './extract-form-control.pipe';
import { RegshopExtractFormGroupPipe } from './extract-form-group.pipe';
import { ExtractTouchedDirective } from './extract-touched.directive';

const directives = [ExtractTouchedDirective];

const pipes = [RegshopExtractFormControlPipe, RegshopExtractFormGroupPipe];

@NgModule({
  declarations: [
    ...directives,
    ...pipes
  ],
  exports: [
    ...directives,
    ...pipes
  ]
})
export class FormsExtractModule {}
