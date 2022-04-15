import { TestBed } from '@angular/core/testing';

import { LocalAsync.StorageService } from './local-async.storage.service';

describe('LocalAsync.StorageService', () => {
  let service: LocalAsync.StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalAsync.StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
