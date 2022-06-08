import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity/src/models';

import { CartProduct } from '@regshop/cart/common';
import { Product } from '@regshop/products/common';
import { ProductFacade } from '@regshop/products/state';
import { isNotNullOrUndefined } from '@regshop/core/utils/operators';

@Pipe({
  name: 'cartTotalPrice'
})
export class CartTotalPricePipe implements PipeTransform {
  constructor(private readonly productFacade: ProductFacade) {}

  transform(cartProducts: CartProduct[]): Observable<number> {
    return this.productFacade.productsEntities$.pipe(
      isNotNullOrUndefined(),
      map((products: Dictionary<Product>) =>
        cartProducts.reduce((total, cartProduct) => total + cartProduct.count * (products[cartProduct.productId]?.price ?? 0), 0)
      )
    );
  }
}
