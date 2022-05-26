import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { Product } from '@regshop/products/common';

import * as ProductActions from './product.actions';

export const PRODUCT_FEATURE_KEY = 'products';

export interface ProductState extends EntityState<Product> {
  selectedId: number | null;
  loaded: boolean;
}

export interface ProductPartialState {
  readonly [PRODUCT_FEATURE_KEY]: ProductState;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductState = productAdapter.getInitialState({
  // set initial required properties
  selectedId: null,
  loaded: false,
});

const productReducer = createReducer(
  initialState,
  on(
    ProductActions.restore,
    (state, { products }): ProductState =>
    productAdapter.upsertMany(products, {
      ...state,
      loaded: true
    })
  ),
  on(
    ProductActions.loadSuccess,
    (state, { products }): ProductState =>
    productAdapter.setAll(products, {
      ...state, loaded: true
    })
  ),
  on(
    ProductActions.loadFailure,
    (state): ProductState => ({
      ...state,
      loaded: true,
    })
  )
);

export function reducer(state: ProductState | undefined, action: Action): ProductState {
  return productReducer(state, action);
}
