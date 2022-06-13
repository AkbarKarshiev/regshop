import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { Nullable } from '@regshop/core/utils/types';
import { Customer, OrderCreate } from '@regshop/orders/common';

import * as OrderActions from './order.actions';
import * as OrderSelectors from './order.selectors';

@Injectable()
export class OrderFacade {
  customer$ = this.store.select(OrderSelectors.selectCustomer);

  orderCreating$ = this.store.select(OrderSelectors.selectOrderCreating);

  createOrderSuccess$ = this.actions$.pipe(
    ofType(OrderActions.createOrderSuccess),
    map(({ orderDetails }) => orderDetails)
  );

  createOrderFailure$ = this.actions$.pipe(
    ofType(OrderActions.createOrderFailure),
    map(({ error }) => error)
  );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  createOrder(order: OrderCreate): void {
    this.dispatch(OrderActions.createOrder({ order }));
  }

  updateCustomer(customer: Nullable<Customer>): void {
    this.dispatch(OrderActions.updateCustomer({ customer }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
