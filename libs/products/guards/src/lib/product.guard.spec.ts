import { TestBed, waitForAsync } from '@angular/core/testing';

import { ProductGuard } from './product.guard';
import { NavigationService } from '@regshop/core/navigation/service';
import { ProductFacade } from '@regshop/products/state';
import { ReplaySubject } from 'rxjs';
import { Product, PRODUCT_STUB } from '@regshop/products/common';
import { UrlTree } from '@angular/router';
import { anything, mock, when } from 'ts-mockito';
import { RouterTestingModule } from '@angular/router/testing';
import { providerOf } from '@regshop/core/testing';
import { NAVIGATION_PATHS } from '@regshop/core/navigation/common';
import { cold } from 'jasmine-marbles';

describe('ProductGuard', () => {
  let guard: ProductGuard;
  let navigationServiceMock: NavigationService;
  let productFacadeMock: ProductFacade;
  let productBySlugLoaded$: ReplaySubject<Product | null>;
  const SNAPSHOT_STUB: any = {
    params: { slug: PRODUCT_STUB.slug },
  };
  const UTL_TREE_STUB = {} as UrlTree;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
    productFacadeMock = mock(ProductFacade);

    productBySlugLoaded$ = new ReplaySubject<Product | null>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [ProductGuard, providerOf(NavigationService, navigationServiceMock), providerOf(ProductFacade, productFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);
    console.log(productBySlugLoaded$);
    when(productFacadeMock.productBySlugLoaded$(PRODUCT_STUB.slug)).thenReturn(productBySlugLoaded$);
    when(navigationServiceMock.createUrlTree(anything())).thenReturn(UTL_TREE_STUB);

    guard = TestBed.inject(ProductGuard);
  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true', () => {
    productBySlugLoaded$.next(PRODUCT_STUB);

    expect(guard.canActivate(SNAPSHOT_STUB)).toBeObservable(cold('a', { a: true }));
  });

  it('should return url', () => {
    productBySlugLoaded$.next(null);

    expect(guard.canActivate(SNAPSHOT_STUB)).toBeObservable(cold('a', { a: UTL_TREE_STUB }));
  });
});
