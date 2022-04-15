import { Injectable } from '@angular/core';
import { AbstractAsyncStorage } from '@regshop/core/storage/common';
import { SessionSyncStorageService } from './session-sync-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionAsyncStorageService extends AbstractAsyncStorage {
  constructor(private readonly sessionSyncStorageService: SessionSyncStorageService) {
    super(sessionSyncStorageService);
  }
}
