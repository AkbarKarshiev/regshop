import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GridModule } from '@regshop/ui/grid';
import { CarouselModule } from '@regshop/ui/carousel';
import { ContainerModule } from '@regshop/ui/container';

import { ProductPortletComponent } from './product-portlet.component';
import { ProductTitleModule } from './components/product-title/product-title.module';
import { ProductSubtitleModule } from './components/product-subtitle/product-subtitle.module';
import { ProductPriceModule } from './components/product-price/product-price.module';
import { ProductPromoModule } from './components/product-promo/product-promo.module';
import { ProductSizesModule } from './components/product-sizes/product-sizes.module';
import { ProductAddToBagModule } from './components/product-add-to-bag/product-add-to-bag.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ContainerModule,
    CarouselModule,
    GridModule,
    ProductTitleModule,
    ProductSubtitleModule,
    ProductPriceModule,
    ProductPromoModule,
    ProductSizesModule,
    ProductAddToBagModule
  ],
  declarations: [ProductPortletComponent],
  exports: [ProductPortletComponent]
})
export class ProductPortletModule {}
