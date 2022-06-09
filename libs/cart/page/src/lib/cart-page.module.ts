import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from '@regshop/ui/grid';
import { CartListModule } from '@regshop/cart/ui/list';
import { CartInfoModule } from '@regshop/cart/ui/info';

import { CartPageRoutingModule } from './cart-page-routing.module';

import { CartPageComponent } from './cart-page.component';

@NgModule({
  imports: [CommonModule, CartPageRoutingModule, GridModule, CartListModule, CartInfoModule],
  declarations: [CartPageComponent]
})
export class CartPageModule {}
