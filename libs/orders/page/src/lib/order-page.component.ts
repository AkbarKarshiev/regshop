import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'regshop-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderPageComponent {}
