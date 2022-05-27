import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsExtractModule } from '@regshop/core/forms/extract';
import { MatButtonModule } from '@angular/material/button';

import { ProductSizesComponent } from './product-sizes.component';

@NgModule({
  declarations: [ProductSizesComponent],
  imports: [CommonModule, FormsExtractModule, MatButtonModule],
  exports: [ProductSizesComponent]
})
export class ProductSizesModule { }
