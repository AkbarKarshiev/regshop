import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { CartProduct, CartKeys } from '@regshop/cart/common';

import * as CartActions from './cart.actions';

export const CART_FEATURE_KEY = CartKeys.Cart;

export interface CartState extends EntityState<CartProduct> {
  loaded: boolean;
}

export interface CartPartialState {
  readonly [CART_FEATURE_KEY]: CartState;
}

export function selectCartProductId(cartProduct: CartProduct): string {
  return `product_${cartProduct.productId}_size_${cartProduct.size}`;
}

export const cartAdapter: EntityAdapter<CartProduct> = createEntityAdapter<CartProduct>({
  selectId: selectCartProductId
});

export const cartInitialState: CartState = cartAdapter.getInitialState({
  loaded: false,
});

const cartReducer = createReducer(
  cartInitialState,
  on(CartActions.clear, (state) =>
    cartAdapter.removeAll({
      ...state,
      loaded: true
    })
  ),
  on(CartActions.restore, (state, { cartProducts }) =>
    cartAdapter.setAll(cartProducts, {
      ...state,
      loaded: true
    })
  ),
  on(CartActions.addProductSuccess, (state, { cartProduct }) => cartAdapter.upsertOne(cartProduct, state)),
  on(CartActions.removeProductSuccess, (state, { cartProduct }) => cartAdapter.removeOne(selectCartProductId(cartProduct), state)),
  on(CartActions.changeProductSuccess, (state, { cartProduct }) =>
    cartAdapter.updateOne({
        id: selectCartProductId(cartProduct),
        changes: cartProduct
      },
      state
    ),
  )
);

export function reducer(state: CartState | undefined, action: Action) {
  return cartReducer(state, action);
}
