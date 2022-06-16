import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from '@regshop/products/common';
import { CartAddService } from '@regshop/cart/ui/add';

@Component({
  selector: 'regshop-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() product!: Product
  constructor(private readonly cartAddService: CartAddService) { }

  onAdd(): void {
    this.cartAddService.add(this.product);
  }
}
