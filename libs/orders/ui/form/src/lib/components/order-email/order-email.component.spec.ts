import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEmailComponent } from './order-email.component';

describe('OrderEmailComponent', () => {
  let component: OrderEmailComponent;
  let fixture: ComponentFixture<OrderEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
