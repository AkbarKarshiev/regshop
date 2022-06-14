import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ServerErrorInterceptor } from './server-error.interceptor';

@NgModule({
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    }
  ]
})
export class ErrorsInterceptorsModule {}
