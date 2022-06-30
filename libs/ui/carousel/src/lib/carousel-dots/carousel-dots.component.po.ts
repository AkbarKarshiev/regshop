import { DebugElement } from '@angular/core';

import { PageObject } from '@regshop/core/testing';

enum Automation {
  CarouselDots = 'carousel-dots',
  CarouselDotsItem = 'carousel-dots-item',
}

export class CarouselDotsComponentPo extends PageObject {
  get CarouselDots(): DebugElement | null {
    return this.getByAutomationId(Automation.CarouselDots);
  }

  get CarouselDotsItem(): DebugElement[] {
    return this.getAllByAutomationId(Automation.CarouselDotsItem);
  }

  triggerCarouselDotsFirstClick(): void {
    this.triggerEventHandler(this.CarouselDotsItem[0], 'click');
  }
}
