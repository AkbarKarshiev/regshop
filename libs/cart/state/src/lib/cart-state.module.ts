import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CartEffects } from './cart.effects';
import { CartFacade } from './cart.facade';
import { CART_FEATURE_KEY, reducer } from './cart.reducer';

@NgModule({
  imports: [StoreModule.forFeature(CART_FEATURE_KEY, reducer), EffectsModule.forFeature([CartEffects]),],
  providers: [CartFacade],
})
export class CartStateModule {}
