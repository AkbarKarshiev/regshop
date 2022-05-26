import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from '@regshop/ui/grid';
import { CarouselModule } from '@regshop/ui/carousel';

import { ProductBoxComponent } from './product-box.component';

@NgModule({
  imports: [CommonModule, GridModule, CarouselModule],
  declarations: [ProductBoxComponent],
  exports: [ProductBoxComponent]
})
export class ProductBoxModule {}
