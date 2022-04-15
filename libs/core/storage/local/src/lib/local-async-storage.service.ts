import { Injectable } from '@angular/core';

import { AbstractAsyncStorage } from '@regshop/core/storage/common';
import { LocalSyncStorageService } from './local-sync-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalAsyncStorageService extends AbstractAsyncStorage {
  constructor(private readonly localSyncStorageService: LocalSyncStorageService) {
    super(localSyncStorageService);
  }
}
