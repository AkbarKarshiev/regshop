import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NavigationService } from '@regshop/core/navigation/service';
import { PlatformService } from '@regshop/core/platform/service';

interface ErrorContext {
  error: HttpErrorResponse;
  body: unknown;
  params: HttpParams;
  url: string;
  reqUrl: string;
}

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(private readonly navigationService: NavigationService, private readonly platformService: PlatformService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (this.platformService.isBrowser && error.status === 500) {
          const context: Partial<ErrorContext> = { error, url: error.url ?? 'unknown' };

          if (req?.body) {
            context.body = req.body;
          }
          if (req?.params) {
            context.params = req.params;
          }
          if (req?.url) {
            context.reqUrl = req.urlWithParams;
          }

          void this.navigationService.navigateByUrl(this.navigationService.getPaths().serverError);
        }

        return throwError(() => error);
      })
    );
  }
}
