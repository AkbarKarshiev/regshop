import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntil, tap } from 'rxjs/operators';

import { DestroyService } from '@regshop/core/utils/destroy';
import { isNotNullOrUndefined } from '@regshop/core/utils/operators';
import { CartFacade } from '@regshop/cart/state';
import { CartProduct } from '@regshop/cart/common';

@Component({
  selector: 'regshop-card-count',
  templateUrl: './card-count.component.html',
  styleUrls: ['./card-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class CardCountComponent implements OnInit {
  @Input() cartProduct!: CartProduct;

  control!: FormControl;

  constructor(private readonly cartFacade: CartFacade, private readonly destroy$: DestroyService) { }

  ngOnInit(): void {
    this.control = new FormControl(this.cartProduct.count);

    this.control.valueChanges
      .pipe(
        isNotNullOrUndefined(),
        tap((count) => this.cartFacade.changeProduct({ ...this.cartProduct, count })),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
