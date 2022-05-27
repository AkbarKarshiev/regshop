import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { ProductAddToBagDialogComponent } from './product-add-to-bag-dialog.component';

@NgModule({
  declarations: [ProductAddToBagDialogComponent],
  imports: [
    CommonModule,
    NavigationPipesModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [ProductAddToBagDialogComponent]
})
export class ProductAddToBagDialogModule { }
