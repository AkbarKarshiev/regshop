import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { CartPipesModule } from '@regshop/cart/ui/pipes';

import { OrderInfoComponent } from './order-info.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    CartPipesModule
  ],
  declarations: [
    OrderInfoComponent
  ],
  exports: [
    OrderInfoComponent
  ]
})
export class OrderInfoModule {}
