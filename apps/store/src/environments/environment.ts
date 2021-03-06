// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { Environments } from '@regshop/core/environments/service';

export const environment: Environments = {
  production: false,
  brand: 'Regshop',
  phone: '998994689745',
  appHost: 'http://localhost',
  google: {
    key: 'AIzaSyARUMuBzVChz0sn-_6KlkujcTdEby7rkDo',
    name: 'products',
    id: '1StkM29e11O2MBsKNj_YvacxN-G9nnRf_6rStDviMJqU'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
