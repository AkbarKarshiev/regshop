import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { FormsExtractModule } from '@regshop/core/forms/extract';
import { GridModule } from '@regshop/ui/grid';

import { OrderNameModule } from './components/order-name/order-name.module';
import { OrderPhoneModule } from './components/order-phone/order-phone.module';
import { OrderEmailModule } from './components/order-email/order-email.module';
import { OrderCityModule } from './components/order-city/order-city.module';
import { OrderAddressModule } from './components/order-address/order-address.module';
import { OrderPostcodeModule } from './components/order-postcode/order-postcode.module';
import { OrderActionsModule } from './components/order-actions/order-actions.module';
import { OrderFormComponent } from './order-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridModule,
    MatCardModule,
    MatButtonModule,
    FormsExtractModule,
    OrderNameModule,
    OrderPhoneModule,
    OrderEmailModule,
    OrderCityModule,
    OrderAddressModule,
    OrderPostcodeModule,
    OrderActionsModule
  ],
  declarations: [OrderFormComponent],
  exports: [OrderFormComponent]
})
export class OrderFormModule {}
