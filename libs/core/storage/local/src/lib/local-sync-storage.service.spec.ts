import { TestBed } from '@angular/core/testing';

import { LocalSync.StorageService } from './local-sync.storage.service';

describe('LocalSync.StorageService', () => {
  let service: LocalSync.StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalSync.StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
