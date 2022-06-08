import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { CartPipesModule } from '@regshop/cart/ui/pipes';
import { ProductPipesModule } from '@regshop/products/ui/pipes';
import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { CartInfoComponent } from './cart-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    NavigationPipesModule,
    CartPipesModule,
    ProductPipesModule,
  ],
  declarations: [CartInfoComponent],
  exports: [CartInfoComponent]
})
export class CartInfoModule {}
