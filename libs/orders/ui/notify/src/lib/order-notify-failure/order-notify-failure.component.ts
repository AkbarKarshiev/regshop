import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { NavigationPaths, PATHS } from '@regshop/core/navigation/common';

@Component({
  selector: 'regshop-order-notify-failure',
  templateUrl: './order-notify-failure.component.html',
  styleUrls: ['./order-notify-failure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderNotifyFailureComponent {
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
