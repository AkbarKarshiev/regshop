import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CarouselNavsComponent } from './carousel-navs.component';

@NgModule({
  declarations: [CarouselNavsComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [CarouselNavsComponent]
})
export class CarouselNavsModule { }
