import { Injectable } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { LayoutService } from '@regshop/core/layout/service';
import { Product } from '@regshop/products/common';

import { ProductAddToBagDialogComponent } from './product-add-to-bag-dialog/product-add-to-bag-dialog.component';

@Injectable()
export class ProductAddToBagService {
  constructor(private readonly matDialog: MatDialog, private readonly layoutService: LayoutService) { }

  open(product: Product): void {
    this.matDialog.open(ProductAddToBagDialogComponent, {
      ...this.params,
      data: { product },
      disableClose: true
    })
  }

  get params(): MatDialogConfig {
    return this.layoutService.is(Breakpoints.Handset)
      ? { panelClass: 'mat-dialog-fullwidth', maxWidth: '100vw', maxHeight: '100vh', height: '100%', width: '100%' }
      : { width: '800px' };
  }
}
