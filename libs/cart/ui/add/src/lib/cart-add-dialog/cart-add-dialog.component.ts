import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CartFacade } from '@regshop/cart/state';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Product } from '@regshop/products/common';
import { NavigationPaths, PATHS } from '@regshop/core/navigation/common';

@Component({
  selector: 'regshop-cart-add-dialog',
  templateUrl: './cart-add-dialog.component.html',
  styleUrls: ['./cart-add-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartAddDialogComponent {
  added = false;

  form!: FormGroup;

  constructor(
    private readonly cartFacade: CartFacade,
    @Inject(MAT_DIALOG_DATA) private matData: { product: Product },
    @Inject(PATHS) public readonly paths: NavigationPaths
  ) { }

  get product(): Product {
    return this.matData.product;
  }

  onAdd(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.added = true;
      this.cartFacade.addProduct(this.form.value);
    }
  }

  onCreateForm(form: FormGroup): void {
    this.form = form;
  }
}
