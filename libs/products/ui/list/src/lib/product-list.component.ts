import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { isNotNullOrUndefined } from '@regshop/core/utils/operators';
import { Product } from '@regshop/products/common';
import { ProductFacade } from '@regshop/products/state';

@Component({
  selector: 'regshop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private readonly productFacade: ProductFacade) { }

  ngOnInit(): void {
    this.products$ = this.productFacade.products$.pipe(isNotNullOrUndefined());
  }

  trackByFn(index: number, product: Product): number {
    return product.id;
  }
}
