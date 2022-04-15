import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer, isPlatformWorkerApp, isPlatformWorkerUi } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  readonly isBrowser: boolean;
  readonly isServer: boolean;
  readonly isWorkerApp: boolean;
  readonly isWorkerUi: boolean;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.isServer = isPlatformServer(platformId);
    this.isWorkerApp = isPlatformWorkerApp(platformId);
    this.isWorkerUi = isPlatformWorkerUi(platformId);
  }
}
