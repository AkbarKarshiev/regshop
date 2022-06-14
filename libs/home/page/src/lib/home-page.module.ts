import { NgModule } from '@angular/core';

import { ProductListModule } from '@regshop/products/ui/list';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  imports: [ProductListModule, HomePageRoutingModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
