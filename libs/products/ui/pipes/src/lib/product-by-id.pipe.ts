import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductFacade } from '@regshop/products/state';
import { isNotNullOrUndefined } from '@regshop/core/utils/operators';
import { Product } from '@regshop/products/common';

@Pipe({
  name: 'productById'
})
export class ProductByIdPipe implements PipeTransform {
  constructor(private readonly productFacade: ProductFacade) {}


  transform(productId: number): Observable<Product> {
    return this.productFacade.product$(productId).pipe(isNotNullOrUndefined());
  }
}
