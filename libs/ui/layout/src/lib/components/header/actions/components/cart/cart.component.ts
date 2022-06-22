import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartFacade } from '@regshop/cart/state';
import { NavigationPaths, PATHS } from '@regshop/core/navigation/common';

@Component({
  selector: 'regshop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  count$!: Observable<number>;

  constructor(private readonly cartFacade: CartFacade, @Inject(PATHS) public readonly paths: NavigationPaths) { }

  ngOnInit() {
    this.count$ = this.cartFacade.count$;
  }
}
