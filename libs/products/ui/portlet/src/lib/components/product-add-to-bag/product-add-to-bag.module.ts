import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ProductAddToBagDialogModule } from './product-add-to-bag-dialog/product-add-to-bag-dialog.module';
import { ProductAddToBagService } from './product-add-to-bag.service';
import { ProductAddToBagComponent } from './product-add-to-bag.component';

@NgModule({
  declarations: [ProductAddToBagComponent],
  imports: [CommonModule, MatButtonModule, ProductAddToBagDialogModule],
  exports: [ProductAddToBagComponent],
  providers: [ProductAddToBagService]
})
export class ProductAddToBagModule { }
