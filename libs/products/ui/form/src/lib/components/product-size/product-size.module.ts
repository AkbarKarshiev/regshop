import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { WidthModule } from '@regshop/ui/width';
import { FormsExtractModule } from '@regshop/core/forms/extract';

import { ProductSizeComponent } from './product-size.component';

@NgModule({
  declarations: [ProductSizeComponent],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule, WidthModule, FormsExtractModule],
  exports: [ProductSizeComponent]
})
export class ProductSizeModule { }
