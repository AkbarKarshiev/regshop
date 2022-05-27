import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddToBagDialogComponent } from './product-add-to-bag-dialog.component';

describe('ProductAddToBagDialogComponent', () => {
  let component: ProductAddToBagDialogComponent;
  let fixture: ComponentFixture<ProductAddToBagDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddToBagDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddToBagDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
