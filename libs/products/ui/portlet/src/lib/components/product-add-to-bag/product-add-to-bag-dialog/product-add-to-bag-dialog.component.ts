import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '@regshop/products/common';
import { NavigationPaths, PATHS } from '@regshop/core/navigation/common';

@Component({
  selector: 'regshop-product-add-to-bag-dialog',
  templateUrl: './product-add-to-bag-dialog.component.html',
  styleUrls: ['./product-add-to-bag-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductAddToBagDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) private matData: { product: Product }, @Inject(PATHS) public readonly paths: NavigationPaths) { }

  get product(): Product {
    return this.matData.product;
  }
}
