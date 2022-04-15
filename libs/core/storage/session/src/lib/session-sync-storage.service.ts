import { Injectable } from '@angular/core';

import { AbstractSyncStorage, storageAvailable } from '@regshop/core/storage/common';
import { MemoryStorageService } from '@regshop/core/storage/memory';

@Injectable({
  providedIn: 'root'
})
export class SessionSyncStorageService extends AbstractSyncStorage {
  constructor() {
    super(storageAvailable('sessionStorage') ? window.sessionStorage : new MemoryStorageService())
  }
}
