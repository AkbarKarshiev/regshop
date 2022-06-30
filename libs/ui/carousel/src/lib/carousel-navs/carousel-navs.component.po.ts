import { PageObject } from '@regshop/core/testing';
import { DebugElement } from '@angular/core';

enum Automation {
  CarouselNavs = 'carousel-navs',
  CarouselNavsPrev = 'carousel-navs-prev',
  CarouselNavsNext = 'carousel-navs-next',
}

export class CarouselNavsComponentPo extends PageObject {
  get carouselNavs(): DebugElement | null {
    return this.getByAutomationId(Automation.CarouselNavs);
  }

  get carouselNavsPrev(): DebugElement | null {
    return this.getByAutomationId(Automation.CarouselNavsPrev);
  }

  get carouselNavsPrevText(): string | null {
    return this.text(Automation.CarouselNavsPrev);
  }

  get carouselNavsNext(): DebugElement | null {
    return this.getByAutomationId(Automation.CarouselNavsNext);
  }

  get carouselNavsNextText(): string | null {
    return this.text(Automation.CarouselNavsNext);
  }

  triggerCarouselNavsPrevClick(): void {
    this.triggerEventHandler(this.carouselNavsPrev, 'click');
  }

  triggerCarouselNavsNextClick(): void {
    this.triggerEventHandler(this.carouselNavsNext, 'click');
  }
}
