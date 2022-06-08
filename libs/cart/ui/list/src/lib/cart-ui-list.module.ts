import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartCardModule } from '@regshop/cart/ui/card';
import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { CartListComponent } from './cart-list.component';

@NgModule({
  imports: [CommonModule, CartCardModule, NavigationPipesModule, RouterModule],
  declarations: [CartListComponent],
  exports: [CartListComponent]
})
export class CartUiListModule {}
