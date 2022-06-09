import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { $localize } from '@angular/localize/init';

import { RouteData } from '@regshop/core/navigation/common';

import { CartPageComponent } from './cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: CartPageComponent,
    data: {
      sitemap: {
        loc: '/cart',
        priority: '1.0'
      },
      meta: {
        title: $localize`:Cart meta|:Cart | Online store Regshop`,
        description: $localize`:Cart meta|:It is very easy to buy on regshop. To place an order, click the order button.`,
        keywords: $localize`:Cart meta|:cart, regshop`,
      }
    } as Partial<RouteData>
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartPageRoutingModule { }