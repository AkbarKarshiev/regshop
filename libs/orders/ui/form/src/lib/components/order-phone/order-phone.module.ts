import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from 'angular-imask';
import { MatInputModule } from '@angular/material/input';

import { FormsExtractModule } from '@regshop/core/forms/extract';
import { WidthModule } from '@regshop/ui/width';

import { OrderPhoneComponent } from './order-phone.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsExtractModule,
    WidthModule,
    IMaskModule
  ],
  declarations: [OrderPhoneComponent],
  exports: [OrderPhoneComponent]
})
export class OrderPhoneModule { }
