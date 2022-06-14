import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@regshop/core/navigation/common';
import { OrderGuard, OrdersGuardsModule } from '@regshop/orders/guards';
import { ProductGuard, ProductGuardsModule } from '@regshop/products/guards';
import { LayoutComponent } from '@regshop/ui/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: NAVIGATION_PATHS.home,
        loadChildren: () => import('@regshop/home/page').then((modules) => modules.HomePageModule),
      },
      {
        path: NAVIGATION_PATHS.product,
        canActivate: [ProductGuard],
        loadChildren: () => import('@regshop/products/page').then((modules) => modules.ProductPageModule),
      },
      {
        path: NAVIGATION_PATHS.cart,
        loadChildren: () => import('@regshop/cart/page').then((modules) => modules.CartPageModule),
      },
      {
        path: NAVIGATION_PATHS.order,
        canActivate: [OrderGuard],
        loadChildren: () => import('@regshop/orders/page').then((modules) => modules.OrdersPageModule),
      },
      {
        path: NAVIGATION_PATHS.support,
        loadChildren: () => import('@regshop/chat/page').then((modules) => modules.ChatPageModule),
      },
      {
        path: '',
        loadChildren: () => import('@regshop/errors/pages').then((modules) => modules.ErrorsPagesModule),
      },
    ]
  }
]

@NgModule({
  imports: [
    OrdersGuardsModule,
    ProductGuardsModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
