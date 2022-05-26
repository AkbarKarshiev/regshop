import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as ProductActions from './product.actions';
import { ProductEffects } from './product.effects';
import { ProductFacade } from './product.facade';
import { ProductEntity } from './product.models';
import {
  PRODUCT_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './product.reducer';
import * as ProductSelectors from './product.selectors';

interface TestSchema {
  product: State;
}

describe('ProductFacade', () => {
  let facade: ProductFacade;
  let store: Store<TestSchema>;
  const createProductEntity = (id: string, name = ''): ProductEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PRODUCT_FEATURE_KEY, reducer),
          EffectsModule.forFeature([ProductEffects]),
        ],
        providers: [ProductFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ProductFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allProduct$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allProduct$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadProductSuccess` to manually update list
     */
    it('allProduct$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allProduct$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        ProductActions.loadProductSuccess({
          product: [createProductEntity('AAA'), createProductEntity('BBB')],
        })
      );

      list = await readFirst(facade.allProduct$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
