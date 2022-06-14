import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ENVIRONMENTS } from '@regshop/core/environments/service';
import { NAVIGATION_PATHS, PATHS } from '@regshop/core/navigation/common';
import { RootStoreModule } from '@regshop/core/store/root';
import { CartStateModule } from '@regshop/cart/state';
import { MetaStateModule } from '@regshop/core/meta/state';
import { ProductsStateModule } from '@regshop/products/state';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    RootStoreModule,
    !environment.production ?StoreDevtoolsModule.instrument({ logOnly: environment.production }) : [],
    CartStateModule,
    MetaStateModule,
    ProductsStateModule
  ],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment,
    },
    {
      provide: PATHS,
      useValue: NAVIGATION_PATHS,
    },
  ]
})
export class AppCoreModule { }
