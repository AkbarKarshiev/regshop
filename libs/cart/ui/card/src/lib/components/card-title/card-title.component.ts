import { Component, Inject, Input } from '@angular/core';

import { Product } from '@regshop/products/common';
import { NavigationPaths, PATHS } from '@regshop/core/navigation/common';

@Component({
  selector: 'regshop-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss']
})
export class CardTitleComponent {
  @Input() product!: Product;

  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) { }
}
