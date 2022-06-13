import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNameComponent } from './order-name.component';

describe('OrderNameComponent', () => {
  let component: OrderNameComponent;
  let fixture: ComponentFixture<OrderNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
