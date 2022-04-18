import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselDotsComponent } from './carousel-dots.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CarouselDotsComponent],
  imports: [CommonModule, MatIconModule],
  exports: [CarouselDotsComponent]
})
export class CarouselDotsModule { }
