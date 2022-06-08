import { Pipe, PipeTransform } from '@angular/core';

import { CartProduct } from '@regshop/cart/common';
import { Product } from '@regshop/products/common';

@Pipe({
  name: 'cartProductPrice'
})
export class CartProductPricePipe implements PipeTransform {
  transform(cartProduct: CartProduct, product: Product): number {
    return cartProduct.count * product.price;
  }
}
