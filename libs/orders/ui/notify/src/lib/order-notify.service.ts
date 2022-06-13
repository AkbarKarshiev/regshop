import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OrderDetails } from '@regshop/orders/common';

import { OrderNotifySuccessComponent } from './order-notify-success/order-notify-success.component';
import { OrderNotifyFailureComponent } from './order-notify-failure/order-notify-failure.component';

@Injectable()
export class OrderNotifyService {
  constructor(private readonly matDialog: MatDialog) { }

  openSuccessDialog(data: OrderDetails): void {
    this.matDialog.open(OrderNotifySuccessComponent, { data, width: '500px' });
  }

  openFailureDialog(): void {
    this.matDialog.open(OrderNotifyFailureComponent, { width: '500px' });
  }
}
