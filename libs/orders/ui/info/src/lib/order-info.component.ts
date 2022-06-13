import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';

import { CartProduct } from '@regshop/cart/common';
import { Product } from '@regshop/products/common';
import { CartFacade } from '@regshop/cart/state';
import { ProductFacade } from '@regshop/products/state';
import { isNotNullOrUndefined } from '@regshop/core/utils/operators';

@Component({
  selector: 'regshop-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {
  readonly columns = ['title', 'size', 'count', 'price'];
  readonly columnsFooter = ['title', 'price'];

  cartProducts$!: Observable<(CartProduct & { product?: Product })[]>;

  constructor(private readonly cartFacade: CartFacade, private readonly productFacade: ProductFacade) { }

  ngOnInit(): void {
    this.cartProducts$ = combineLatest([
      this.cartFacade.cartProduct$.pipe(isNotNullOrUndefined()),
      this.productFacade.productsEntities$.pipe(isNotNullOrUndefined())
    ]).pipe(
      map(([cartProducts, products]) => cartProducts.map((cartProduct) => ({ ...cartProduct, product: products[cartProduct.productId] })))
    )
  }
}
