import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { CartComponent } from './cart.component';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [CartComponent],
  exports: [CartComponent],
  imports: [CommonModule, NavigationPipesModule, MatButtonModule, MatIconModule, RouterModule, MatBadgeModule]
})
export class CartModule { }
