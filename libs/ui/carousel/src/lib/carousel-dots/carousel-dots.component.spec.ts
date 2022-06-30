import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';

import { CarouselDotsComponent } from './carousel-dots.component';
import { CarouselDotsComponentPo } from './carousel-dots.component.po';

@Component({
  template: '<regshop-carousel-dots automation-id="carousel-dots" [counts]="count"></regshop-carousel-dots>'
})
export class WrapperComponent {
  count = 3;
}

describe('CarouselDotsComponent', () => {
  let pageObject: CarouselDotsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [CarouselDotsComponent, WrapperComponent]
      })
      .compileComponents()
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new CarouselDotsComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set dots', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.CarouselDotsItem.length).toBe(fixtureWrapper.componentInstance.count);
  });

  it('should call selected', () => {
    const selected = jest.spyOn(pageObject.CarouselDots?.componentInstance.selected, 'emit');

    fixtureWrapper.detectChanges();
    pageObject.triggerCarouselDotsFirstClick();

    expect(selected).toBeCalledWith(0);
  });
});
