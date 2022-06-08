import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CartProduct } from '@regshop/cart/common';

@Component({
  selector: 'regshop-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartCardComponent {
  @Input() cartProduct!: CartProduct;
}
