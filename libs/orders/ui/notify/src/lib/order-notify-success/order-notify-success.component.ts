import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { NavigationPaths, PATHS } from '@regshop/core/navigation/common';

@Component({
  selector: 'regshop-order-notify-success',
  templateUrl: './order-notify-success.component.html',
  styleUrls: ['./order-notify-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderNotifySuccessComponent {
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
