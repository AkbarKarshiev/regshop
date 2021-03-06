import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { mock, when } from 'ts-mockito';

import { providerOf } from '@regshop/core/testing';
import { ENVIRONMENTS_DEFAULT, EnvironmentService } from '@regshop/core/environments/service';
import { META_CONFIG, META_CONFIG_DEFAULT, META_CONFIG_OG, META_CONFIG_OG_DEFAULT } from '@regshop/core/meta/common';

import { MetaService } from './meta.service';

describe('MetaService', () => {
  let getProp: <T = HTMLMetaElement>(prop: string) => T | null;

  let service: MetaService;
  let routerMock: Router;
  let environmentServiceMock: EnvironmentService;
  let document: Document;

  beforeEach(() => {
    routerMock = mock(Router);
    environmentServiceMock = mock(EnvironmentService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [],
        providers: [
          providerOf(Router, routerMock),
          providerOf(EnvironmentService, environmentServiceMock),
          {
            provide: META_CONFIG,
            useValue: META_CONFIG_DEFAULT,
          },
          {
            provide: META_CONFIG_OG,
            useValue: META_CONFIG_OG_DEFAULT,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(environmentServiceMock.environments).thenReturn(ENVIRONMENTS_DEFAULT);
    when(routerMock.url).thenReturn('/');

    service = TestBed.inject(MetaService);
    document = TestBed.inject(DOCUMENT);

    getProp = <T = HTMLMetaElement>(prop: string) => document.getElementById(prop) as T | null;
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should set meta', () => {
    service.update();

    expect(document.title).toBe(`${META_CONFIG_DEFAULT.title} | ${ENVIRONMENTS_DEFAULT.brand}`);
    expect(getProp<HTMLLinkElement>('canonical')?.href).toBe('http://localhost/');
    expect(getProp('meta-description')?.content).toBe(META_CONFIG_DEFAULT.description);
    expect(getProp('meta-keywords')?.content).toBe(META_CONFIG_DEFAULT.keywords);
    expect(getProp('meta-og:title')?.content).toBe(`${META_CONFIG_OG_DEFAULT.title} | ${ENVIRONMENTS_DEFAULT.brand}`);
    expect(getProp('meta-og:description')?.content).toBe(META_CONFIG_OG_DEFAULT.description);
    expect(getProp('meta-og:type')?.content).toBe(META_CONFIG_OG_DEFAULT.type);
    expect(getProp('meta-og:locale')?.content).toBe('en-US');
    expect(getProp('meta-og:site_name')?.content).toBe(ENVIRONMENTS_DEFAULT.brand);
    expect(getProp('meta-og:image')?.content).toBe(`${ENVIRONMENTS_DEFAULT.appHost}${META_CONFIG_OG_DEFAULT.image}`);
    expect(getProp('meta-og:image:type')?.content).toBe(META_CONFIG_OG_DEFAULT.imageType);
    expect(getProp('meta-og:image:width')?.content).toBe(META_CONFIG_OG_DEFAULT.imageWidth);
    expect(getProp('meta-og:image:height')?.content).toBe(META_CONFIG_OG_DEFAULT.imageHeight);
  });
});
