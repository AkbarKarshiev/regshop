import { TestBed } from '@angular/core/testing';

import { ServerErrorInterceptor } from './server-error.interceptor';

describe('ServerErrorService', () => {
  let service: ServerErrorInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerErrorInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
