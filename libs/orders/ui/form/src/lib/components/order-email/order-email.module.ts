import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { FormsExtractModule } from '@regshop/core/forms/extract';
import { WidthModule } from '@regshop/ui/width';

import { OrderEmailComponent } from './order-email.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsExtractModule,
    WidthModule
  ],
  declarations: [OrderEmailComponent],
  exports: [OrderEmailComponent]
})
export class OrderEmailModule { }
