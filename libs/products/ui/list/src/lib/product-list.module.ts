import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardModule } from '@regshop/products/ui/card';
import { GridModule } from '@regshop/ui/grid';

import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [CommonModule, ProductCardModule, GridModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductListModule {}
