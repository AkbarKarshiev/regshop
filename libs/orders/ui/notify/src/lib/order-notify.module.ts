import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { OrderNotifySuccessModule } from './order-notify-success/order-notify-success.module';
import { OrderNotifyFailureModule } from './order-notify-failure/order-notify-failure.module';
import { OrderNotifyService } from './order-notify.service';

@NgModule({
  imports: [MatDialogModule, OrderNotifySuccessModule, OrderNotifyFailureModule],
  providers: [OrderNotifyService]
})
export class OrderNotifyModule {}
