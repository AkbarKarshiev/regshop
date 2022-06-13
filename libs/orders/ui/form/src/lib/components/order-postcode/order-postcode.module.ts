import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { FormsExtractModule } from '@regshop/core/forms/extract';
import { WidthModule } from '@regshop/ui/width';

import { OrderPostcodeComponent } from './order-postcode.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsExtractModule,
    WidthModule
  ],
  declarations: [OrderPostcodeComponent],
  exports: [OrderPostcodeComponent]
})
export class OrderPostcodeModule { }
