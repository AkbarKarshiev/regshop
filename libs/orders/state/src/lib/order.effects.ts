import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, concatLatestFrom, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';

import { LocalAsyncStorageService } from '@regshop/core/storage/local';
import { OrdersApiService } from '@regshop/orders/api';
import { Customer, OrderKeys } from '@regshop/orders/common';
import { selectProducts } from '@regshop/products/state';
import { selectCustomer } from '@regshop/orders/state';

import * as OrderActions from './order.actions';

@Injectable()
export class OrderEffects implements OnInitEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.init),
      concatLatestFrom(() => this.localAsyncStorage.getItem<Customer | null>(OrderKeys.Customer)),
      fetch({
        run: (action, customer) => OrderActions.restore({ customer })
      })
    )
  );

  createOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.createOrder),
      concatLatestFrom(() => this.store.select(selectProducts)),
      fetch({
        run: ({ order }, products) => {
          return this.ordersApiService
            .createOrder({ ...order, products })
            .pipe(map((orderDetails) => OrderActions.createOrderSuccess({ orderDetails })));
        },
        onError: (action, error) => OrderActions.createOrderFailure({ error })
      })
    )
  )

  createOrderSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.createOrderSuccess),
      fetch({
        run: () => {
          this.localAsyncStorage.removeItem(OrderKeys.Customer);
        }
      })
    )
  );

  updateCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.updateCustomer),
      concatLatestFrom(() => this.store.select(selectCustomer)),
      fetch({
        run: ({ customer }, previousCustomer) => {
          const mergedCustomer = { ...previousCustomer, ...customer };
          this.localAsyncStorage.setItem(OrderKeys.Customer, mergedCustomer);
        },
      })
    )
  )

  constructor(
    private readonly actions$: Actions,
    private readonly localAsyncStorage: LocalAsyncStorageService,
    private readonly ordersApiService: OrdersApiService,
    private readonly store: Store
  ) {}

  ngrxOnInitEffects(): Action {
    return OrderActions.init();
  }
}
