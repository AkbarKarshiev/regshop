import { InjectionToken } from '@angular/core';

export interface Environments {
  production: boolean;
  brand: string;
  phone: string;
  google?: {
    id: string;
    name: string;
    key: string;
  };
  appHost: string;
}

export const ENVIRONMENTS = new InjectionToken<Environments>('ENVIRONMENTS');

export const ENVIRONMENTS_DEFAULT: Environments = {
  production: false,
  brand: 'Regshop',
  phone: '998994689745',
  appHost: 'http://localhost',
};
