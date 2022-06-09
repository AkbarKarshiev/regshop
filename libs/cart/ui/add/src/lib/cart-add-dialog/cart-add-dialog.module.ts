import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ProductBoxModule } from '@regshop/products/ui/box';
import { ProductFormModule } from '@regshop/products/ui/form';
import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { CartAddDialogComponent } from './cart-add-dialog.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatDialogModule, MatButtonModule, ProductBoxModule, ProductFormModule, NavigationPipesModule],
  declarations: [CartAddDialogComponent],
  exports: [CartAddDialogComponent]
})
export class CartAddDialogModule { }
