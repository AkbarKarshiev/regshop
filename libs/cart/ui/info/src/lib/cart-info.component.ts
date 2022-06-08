import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartProduct } from '@regshop/cart/common';
import { NavigationPaths, PATHS } from '@regshop/core/navigation/common';
import { CartFacade } from '@regshop/cart/state';

@Component({
  selector: 'regshop-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartInfoComponent implements OnInit {
  cartProducts$!: Observable<CartProduct[]>;

  constructor(private readonly cartFacade: CartFacade, @Inject(PATHS) public readonly paths: NavigationPaths) { }

  ngOnInit(): void {
    this.cartProducts$ = this.cartFacade.cartProduct$;
  }

  trackByFn(index: number, cartProduct: CartProduct): string {
    return `${cartProduct.productId}_${cartProduct.size}`;
  }
}
