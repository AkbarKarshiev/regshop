import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListModule } from '@regshop/products/ui/list';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  imports: [CommonModule, ProductListModule, HomePageRoutingModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
