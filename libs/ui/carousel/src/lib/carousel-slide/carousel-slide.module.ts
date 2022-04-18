import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageModule } from '@regshop/ui/image';

import { CarouselSlideComponent } from './carousel-slide.component';

@NgModule({
  declarations: [CarouselSlideComponent],
  imports: [CommonModule, ImageModule],
  exports: [CarouselSlideComponent]
})
export class CarouselSlideModule { }
