import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddToBagComponent } from './product-add-to-bag.component';

describe('ProductAddToBagComponent', () => {
  let component: ProductAddToBagComponent;
  let fixture: ComponentFixture<ProductAddToBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddToBagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddToBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
