import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsExtractModule } from '@regshop/core/forms/extract';
import { WidthModule } from '@regshop/ui/width';

import { OrderAddressComponent } from './order-address.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsExtractModule,
    WidthModule
  ],
  declarations: [OrderAddressComponent],
  exports: [OrderAddressComponent]
})
export class OrderAddressModule { }
