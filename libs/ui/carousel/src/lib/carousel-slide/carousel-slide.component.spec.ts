import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ImageModule } from '@regshop/ui/image';

import { CarouselSlideComponent } from './carousel-slide.component';
import { CarouselSlideComponentPo } from './carousel-slide.component.po';

@Component({
  template: `<regshop-carousel-slide automation-id="carousel-slide" [image]="img"></regshop-carousel-slide>`
})
export class WrapperComponent {
  img = '/1.jpg'
}

describe('CarouselSlideComponent', () => {
  let pageObject: CarouselSlideComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [ImageModule],
        declarations: [CarouselSlideComponent, WrapperComponent]
      })
      .compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new CarouselSlideComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set background image', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.carouselSlideImageStyles).toBe('url(/1.jpg)');
  });
});
