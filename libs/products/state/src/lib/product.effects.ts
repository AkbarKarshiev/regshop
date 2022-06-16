import { Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { createEffect, Actions, ofType, concatLatestFrom, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { map, take } from 'rxjs';

import { PlatformService } from '@regshop/core/platform/service';
import { LocalAsyncStorageService } from '@regshop/core/storage/local';
import { ProductApiService } from '@regshop/products/api';
import { Product, ProductKeys, PRODUCTS_META } from '@regshop/products/common';

import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects implements OnInitEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.init),
      concatLatestFrom(() => this.localAsyncStorage.getItem<Product[] | null>(ProductKeys.Products).pipe(take(1))),
      fetch({
        id: (action, products) => 'init-products',
        run: (action, products) => {
          // const transferProducts = this.transferState.get<Product[]>(PRODUCTS_META, []);
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ProductActions.restore({ products: products ?? [] });
          // return ProductActions.restore({ products: products ?? transferProducts });
        },
        onError: (action, error) => console.error(`Error: ${action.type}\n`, error)
      })
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.load),
      fetch({
        id: () => 'load-products',
        run: () =>
          this.productApiService.load().pipe(
            map((products) => {
              this.localAsyncStorage.setItem(ProductKeys.Products, products);

              // if (this.platformService.isServer && products.length) {
              //   this.transferState.set<Product[]>(PRODUCTS_META, products);
              // }

              return ProductActions.loadSuccess({ products })
            })
          ),
        onError: (action, error) => {
          console.error(`Error: ${action.type}\n`, error);
          return ProductActions.loadFailure({ error })
        }
      })
    )
  )

  constructor(
    private readonly actions$: Actions,
    private readonly localAsyncStorage: LocalAsyncStorageService,
    private readonly productApiService: ProductApiService,
    // private readonly transferState: TransferState,
    private readonly platformService: PlatformService
  ) {}

  ngrxOnInitEffects(): Action {
    return ProductActions.init();
  }
}
