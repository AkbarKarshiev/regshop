import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel.component';
import { CarouselDotsModule } from './carousel-dots/carousel-dots.module';
import { CarouselNavsModule } from './carousel-navs/carousel-navs.module';
import { CarouselSlideModule } from './carousel-slide/carousel-slide.module';

@NgModule({
  imports: [CommonModule, CarouselDotsModule, CarouselNavsModule, CarouselSlideModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent]
})
export class CarouselModule {}
