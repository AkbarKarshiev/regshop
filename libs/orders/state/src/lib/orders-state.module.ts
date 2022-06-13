import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { OrdersApiModule } from '@regshop/orders/api';

import { OrderEffects } from './order.effects';
import { OrderFacade } from './order.facade';
import { ORDER_FEATURE_KEY, reducer } from './order.reducer';

@NgModule({
  imports: [
    OrdersApiModule,
    StoreModule.forFeature(ORDER_FEATURE_KEY, reducer),
    EffectsModule.forFeature([OrderEffects]),
  ],
  providers: [OrderFacade],
})
export class OrdersStateModule {}
