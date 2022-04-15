import { TestBed } from '@angular/core/testing';

import { SessionAsyncStorageService } from './session-async-storage.service';

describe('SessionAsyncStorageService', () => {
  let service: SessionAsyncStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionAsyncStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
