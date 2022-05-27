import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from '@regshop/ui/grid';
import { FormsExtractModule } from '@regshop/core/forms/extract';

import { ProductSizeModule } from './components/product-size/product-size.module';
import { ProductCountModule } from './components/product-count/product-count.module';
import { ProductFormComponent } from './product-form.component';

@NgModule({
  imports: [CommonModule, GridModule, ProductSizeModule, FormsExtractModule, ProductCountModule],
  declarations: [ProductFormComponent],
  exports: [ProductFormComponent]
})
export class ProductFormModule {}
