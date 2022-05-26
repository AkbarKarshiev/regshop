import { APP_INITIALIZER, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductsApiModule } from '@regshop/products/api';

import { ProductEffects } from './product.effects';
import { ProductFacade } from './product.facade';
import { PRODUCT_FEATURE_KEY, reducer } from './product.reducer';

export function metaServiceFactory(productFacade: ProductFacade): () => void {
  return (): void => productFacade.load();
}

@NgModule({
  imports: [ProductsApiModule, StoreModule.forFeature(PRODUCT_FEATURE_KEY, reducer), EffectsModule.forFeature([ProductEffects]),],
  providers: [
    ProductFacade,
    {
      provide: APP_INITIALIZER,
      useFactory: metaServiceFactory,
      deps: [ProductFacade],
      multi: true
    }
  ],
})
export class ProductsStateModule {}
