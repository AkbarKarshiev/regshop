import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPortletComponent } from './product-portlet.component';

describe('ProductPortletComponent', () => {
  let component: ProductPortletComponent;
  let fixture: ComponentFixture<ProductPortletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPortletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPortletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
