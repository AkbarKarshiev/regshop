import { NgModule } from '@angular/core';

import { CartTotalPricePipe } from './cart-total-price.pipe';
import { CartProductPricePipe } from './cart-product-price.pipe';
import { CartTotalCountPipe } from './cart-total-count.pipe';

const pipes = [
  CartTotalPricePipe,
  CartProductPricePipe,
  CartTotalCountPipe
];

@NgModule({
  declarations: pipes,
  exports: pipes
})
export class CartPipesModule {}
