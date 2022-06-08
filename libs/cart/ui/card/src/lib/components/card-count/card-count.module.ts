import { NgModule } from '@angular/core';

import { CardCountComponent } from './card-count.component';
import { ProductCountModule } from '@regshop/products/ui/form';

@NgModule({
  declarations: [CardCountComponent],
  imports: [ProductCountModule],
  exports: [CardCountComponent]
})
export class CardCountModule { }
