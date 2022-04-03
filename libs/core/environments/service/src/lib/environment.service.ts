import { Inject, Injectable, Optional } from '@angular/core';
import { Environments, ENVIRONMENTS, ENVIRONMENTS_DEFAULT } from './environment.interface';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  readonly environments: Environments;

  constructor(@Optional() @Inject(ENVIRONMENTS) environments: Environments | null) {
    this.environments = environments ?? ENVIRONMENTS_DEFAULT;
    
    this.environments = {
      ...(environments ?? ENVIRONMENTS_DEFAULT),
      google: {
        // @ts-ignore
        key: process.env['GOOGLE_KEY'] ?? '',
        // @ts-ignore
        id: process.env['GOOGLE_ID'] ?? '',
        // @ts-ignore
        name: process.env['GOOGLE_NAME'] ?? '',
      },
    };
  }

  getEnvironments(): Environments {
    return this.environments;
  }
}
