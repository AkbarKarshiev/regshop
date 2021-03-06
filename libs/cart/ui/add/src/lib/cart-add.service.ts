import { Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog/dialog-config';

import { LayoutService } from '@regshop/core/layout/service';
import { Product } from '@regshop/products/common';

import { CartAddDialogComponent } from './cart-add-dialog/cart-add-dialog.component';

@Injectable()
export class CartAddService {
  constructor(private readonly matDialog: MatDialog, private readonly layoutService: LayoutService) { }

  add(product: Product): void {
    this.matDialog.open(CartAddDialogComponent, {
      ...this.params,
      data: { product },
      disableClose: true
    });
  }

  private get params(): MatDialogConfig {
    return this.layoutService.is(Breakpoints.Handset)
      ? { panelClass: 'mat-dialog-fullwidth', maxWidth: '100vw', maxHeight: '100vh', height: '100%', width: '100%' }
      : { width: '800px'};
  }
}
