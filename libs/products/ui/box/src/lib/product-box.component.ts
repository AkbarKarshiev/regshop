import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from '@regshop/products/common';

@Component({
  selector: 'regshop-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBoxComponent {
  @Input() product!: Product;
}
