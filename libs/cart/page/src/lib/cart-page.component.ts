import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'regshop-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartPageComponent {}
