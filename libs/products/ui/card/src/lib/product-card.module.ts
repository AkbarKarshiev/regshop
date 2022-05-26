import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CarouselModule } from '@regshop/ui/carousel';
import { PriceModule } from './price/price.module';

import { ProductCardComponent } from './product-card.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    PriceModule
  ],
  declarations: [
    ProductCardComponent
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule {}
