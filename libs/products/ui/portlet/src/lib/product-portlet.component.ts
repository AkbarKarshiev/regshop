import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProductFacade } from '@regshop/products/state';
import { isNotNullOrUndefined } from '@regshop/core/utils/operators';
import { Product } from '@regshop/products/common';

@Component({
  selector: 'regshop-product-portlet',
  templateUrl: './product-portlet.component.html',
  styleUrls: ['./product-portlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPortletComponent implements OnInit {
  product$!: Observable<Product>;

  readonly control = new FormControl(null, [Validators.required]);

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly productFacade: ProductFacade) { }

  ngOnInit(): void {
    const { slug } = this.activatedRoute.snapshot.params;

    if (slug) {
      this.product$ = this.productFacade.productBySlug$(slug).pipe(isNotNullOrUndefined());
    }
  }

}
