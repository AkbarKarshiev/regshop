import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GridModule } from '@regshop/ui/grid';
import { CarouselModule } from '@regshop/ui/carousel';
import { ContainerModule } from '@regshop/ui/container';

import { ProductPortletComponent } from './product-portlet.component';
import { ProductTitleModule } from './components/product-title/product-title.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ContainerModule,
    CarouselModule,
    GridModule,
    ProductTitleModule
  ],
  declarations: [ProductPortletComponent],
  exports: [ProductPortletComponent]
})
export class ProductPortletModule {}
