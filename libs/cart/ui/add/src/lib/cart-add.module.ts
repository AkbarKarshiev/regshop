import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartAddService } from './cart-add.service';
import { CartAddDialogModule } from './cart-add-dialog/cart-add-dialog.module';

@NgModule({
  imports: [CommonModule, CartAddDialogModule],
  providers: [CartAddService]
})
export class CartAddModule {}
