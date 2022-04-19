import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionsComponent } from './actions.component';
import { PhoneModule } from './components/phone/phone.module';
import { CartModule } from './components/cart/cart.module';
import { SupportModule } from './components/support/support.module';

@NgModule({
  declarations: [ActionsComponent],
  imports: [CommonModule, PhoneModule, CartModule, SupportModule],
  exports: [ActionsComponent],
})
export class ActionsModule { }
