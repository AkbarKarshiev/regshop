import { Action, createReducer, on } from '@ngrx/store';

import { Nullable } from '@regshop/core/utils/types';
import { Customer } from '@regshop/orders/common';

import * as OrderActions from './order.actions';

export const ORDER_FEATURE_KEY = 'order';

export interface OrderState {
  customer: Nullable<Customer> | null;
  orderCreating: boolean;
}

export interface OrderPartialState {
  readonly [ORDER_FEATURE_KEY]: OrderState;
}

export const orderInitialState: OrderState = {
  customer: null,
  orderCreating: false,
};

const orderReducer = createReducer(
  orderInitialState,
  on(
    OrderActions.restore,
    (state, { customer }): OrderState => ({
      ...state,
      customer,
    })
  ),
  on(
    OrderActions.updateCustomer,
    (state, { customer }): OrderState => ({
      ...state,
      // @ts-ignore
      customer: { ...state.customer, ...customer },
    })
  ),
  on(
    OrderActions.createOrder,
    (state): OrderState => ({
      ...state,
      orderCreating: true,
    })
  ),
  on(
    OrderActions.createOrderSuccess,
    (state): OrderState => ({
      ...state,
      customer: null,
      orderCreating: false,
    })
  ),
  on(
    OrderActions.createOrderFailure,
    (state): OrderState => ({
      ...state,
      orderCreating: false,
    })
  )
);

export function reducer(state: OrderState | undefined, action: Action): OrderState {
  return orderReducer(state, action);
}
