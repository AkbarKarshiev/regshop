import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPipesModule } from '@regshop/cart/ui/pipes';
import { ProductPipesModule } from '@regshop/products/ui/pipes';
import { GridModule } from '@regshop/ui/grid';
import { MultiplatformModule } from '@regshop/ui/multiplatform';

import { CartCardComponent } from './cart-card.component';
import { CardTitleModule } from './components/card-title/card-title.module';
import { CardPreviewModule } from './components/card-preview/card-preview.module';
import { CardCountModule } from './components/card-count/card-count.module';
import { CardPriceModule } from './components/card-price/card-price.module';
import { CardRemoveModule } from './components/card-remove/card-remove.module';
import { CardDescriptionModule } from './components/card-description/card-description.module';

@NgModule({
  imports: [
    CommonModule,
    MultiplatformModule,
    ProductPipesModule,
    CardTitleModule,
    GridModule,
    CardPreviewModule,
    CardCountModule,
    CardPriceModule,
    CartPipesModule,
    CardRemoveModule,
    CardDescriptionModule
  ],
  declarations: [CartCardComponent],
  exports: [CartCardComponent]
})
export class CartCardModule {}
