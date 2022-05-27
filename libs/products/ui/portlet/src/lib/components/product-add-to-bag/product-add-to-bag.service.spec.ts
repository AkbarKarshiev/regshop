import { TestBed } from '@angular/core/testing';

import { ProductAddToBagService } from './product-add-to-bag.service';

describe('ProductAddToBagService', () => {
  let service: ProductAddToBagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAddToBagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
