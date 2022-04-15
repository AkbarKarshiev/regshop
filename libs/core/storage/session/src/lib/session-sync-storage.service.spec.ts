import { TestBed } from '@angular/core/testing';

import { SessionSyncStorageService } from './session-sync-storage.service';

describe('SessionSyncStorageService', () => {
  let service: SessionSyncStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionSyncStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
