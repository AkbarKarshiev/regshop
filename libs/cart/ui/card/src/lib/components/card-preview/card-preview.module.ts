import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardPreviewComponent } from './card-preview.component';
import { CarouselModule } from '@regshop/ui/carousel';

@NgModule({
  declarations: [CardPreviewComponent],
  imports: [CommonModule, CarouselModule],
  exports: [CardPreviewComponent]
})
export class CardPreviewModule { }
