import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { NavigationService } from '@regshop/core/navigation/service';
import { ProductFacade } from '@regshop/products/state';

@Injectable()
export class ProductGuard implements CanActivate {
  private readonly redirectTree = this.navigationService.createUrlTree(this.navigationService.getPaths().home);

  constructor(private readonly navigationService: NavigationService, private readonly productFacade: ProductFacade) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const { slug } = route.params;

    if (!slug) {
      return of(this.redirectTree);
    }

    return this.productFacade.productBySlugLoaded$(slug).pipe(map((product) => !!product || this.redirectTree));
  }
}
