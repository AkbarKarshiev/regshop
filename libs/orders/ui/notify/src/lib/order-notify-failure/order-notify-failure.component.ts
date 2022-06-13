import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { OrderDetails } from '@regshop/orders/common';

@Component({
  selector: 'regshop-order-notify-failure',
  templateUrl: './order-notify-failure.component.html',
  styleUrls: ['./order-notify-failure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderNotifyFailureComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public readonly matData: OrderDetails) {}
}
