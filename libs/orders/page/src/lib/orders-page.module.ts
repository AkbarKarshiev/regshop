import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderInfoModule } from '@regshop/orders/ui/info';
import { OrderFormModule } from '@regshop/orders/ui/form';
import { OrdersStateModule } from '@regshop/orders/state';

import { OrderPageComponent } from './order-page.component';
import { OrderPageRoutingModule } from './order-page-routing.module';

@NgModule({
  imports: [CommonModule, OrderPageRoutingModule, OrdersStateModule, OrderInfoModule, OrderFormModule],
  declarations: [OrderPageComponent],
})
export class OrdersPageModule {}
