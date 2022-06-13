import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPostcodeComponent } from './order-postcode.component';

describe('OrderPostcodeComponent', () => {
  let component: OrderPostcodeComponent;
  let fixture: ComponentFixture<OrderPostcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPostcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
