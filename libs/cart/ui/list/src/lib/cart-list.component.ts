import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartProduct } from '@regshop/cart/common';
import { CartFacade } from '@regshop/cart/state';
import { NavigationPaths, PATHS } from '@regshop/core/navigation/common';

@Component({
  selector: 'regshop-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit {
  cartProducts$!: Observable<CartProduct[]>;

  constructor(private readonly cartFacade: CartFacade, @Inject(PATHS) public readonly paths: NavigationPaths) { }

  ngOnInit(): void {
    this.cartProducts$ = this.cartFacade.cartProduct$;
  }

  trackByFn(index: number, cartProduct: CartProduct): string {
    return `${cartProduct.productId}_${cartProduct.size}`;
  }
}
