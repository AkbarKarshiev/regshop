import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { PlatformService } from '@regshop/core/platform/service';
import { NavigationService } from '@regshop/core/navigation/service';
import { CartFacade } from '@regshop/cart/state';
import { CartProduct } from '@regshop/cart/common';

@Injectable()
export class OrderGuard implements CanActivate {
  constructor(
    private readonly platformService: PlatformService,
    private readonly navigationService: NavigationService,
    private readonly cartFacade: CartFacade
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    if (!this.platformService.isBrowser) {
      return of(false);
    }

    return this.cartFacade.cartProduct$.pipe(
      map((cartProducts: CartProduct[]) => cartProducts.length > 0 || this.navigationService.createUrlTree(this.navigationService.getPaths().home))
    )
  }
}
