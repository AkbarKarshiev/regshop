import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, concatLatestFrom, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { $localize } from '@angular/localize/init';

import { CartProduct, CartKeys } from '@regshop/cart/common'
import { LocalAsyncStorageService } from '@regshop/core/storage/local'
import { createOrderSuccess  } from '@regshop/order/state'

import * as CartActions from './cart.actions';
import { selectCartProductId } from './cart.reducer';
import * as CartSelectors from './cart.selectors';

@Injectable()
export class CartEffects implements OnInitEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.init),
      concatLatestFrom(() => this.localAsyncStorage.getItem<CartProduct[] | null>(CartKeys.Cart)),
      fetch({
        run: (action, cartProducts) => CartActions.restore({ cartProducts: cartProducts ?? [] })
      })
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addProduct),
      concatLatestFrom(() => this.store.select(CartSelectors.selectCartProductsEntities)),
      fetch({
        run: ({ cartProduct }, cartProducts) =>
          !cartProducts[selectCartProductId(cartProduct)]
            ? CartActions.addProductSuccess({ cartProduct })
            : CartActions.addProductFailure({ error: $localize`:Cart State|:Duplicate CartProduct`, cartProduct }),
        onError(action, error) {
          console.log(error);
        }
      })
    )
  );

  removeProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.removeProduct),
      concatLatestFrom(() => this.store.select(CartSelectors.selectCartProductsEntities)),
      fetch({
        run: ({ cartProduct }, cartProducts) =>
          cartProducts[selectCartProductId(cartProduct)]
            ? CartActions.removeProductSuccess({ cartProduct })
            : CartActions.removeProductFailure({ error: $localize`:Cart State|:CartProduct was not found`, cartProduct }),
        onError(action, error) {
          console.log(error);
        }
      })
    )
  );

  changeProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.changeProduct),
      concatLatestFrom(() => this.store.select(CartSelectors.selectCartProductsEntities)),
      fetch({
        run: ({ cartProduct }, cartProducts) =>
          cartProducts[selectCartProductId(cartProduct)]
            ? CartActions.changeProductSuccess({ cartProduct })
            : CartActions.changeProductFailure({ error: $localize`:Cart State|:CartProduct was not found`, cartProduct }),
        onError(action, error) {
          console.log(error);
        }
      })
    )
  );

  saveCartToLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addProductSuccess, CartActions.changeProductSuccess, CartActions.removeProductSuccess),
      concatLatestFrom(() => this.store.select(CartSelectors.selectCartProductsEntities)),
      fetch({
        run: (action, cartProducts) => this.localAsyncStorage.setItem(CartKeys.Cart, cartProducts)
      })
    )
  );

  createOrderSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createOrderSuccess),
      fetch({
        run: () => {
          this.localAsyncStorage.removeItem(CartKeys.Cart);

          return CartActions.clear();
        }
      })
    )
  )

  constructor(
    private readonly actions$: Actions,
    private readonly localAsyncStorage: LocalAsyncStorageService,
    private readonly store: Store
  ) {}

  ngrxOnInitEffects(): Action {
    return CartActions.init();
  }
}
