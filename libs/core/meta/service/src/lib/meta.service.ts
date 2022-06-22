import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, LOCALE_ID, Optional } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { EnvironmentService } from '@regshop/core/environments/service';
import {
  META_CONFIG,
  META_CONFIG_DEFAULT,
  META_CONFIG_OG,
  META_CONFIG_OG_DEFAULT,
  MetaConfig,
  MetaConfigOg
} from '@regshop/core/meta/common';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private readonly metaConfig: MetaConfig;
  private readonly metaConfigOg: MetaConfigOg;

  constructor(
    private readonly titleService: Title,
    private readonly router: Router,
    private readonly meta: Meta,
    private readonly environmentService: EnvironmentService,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(LOCALE_ID) private readonly localeId: string,
    @Optional() @Inject(META_CONFIG) metaConfig: MetaConfig | null,
    @Optional() @Inject(META_CONFIG_OG) metaConfigOg: MetaConfigOg | null
  ) {
    this.metaConfig = metaConfig ?? META_CONFIG_DEFAULT;
    this.metaConfigOg = metaConfigOg ?? META_CONFIG_OG_DEFAULT;
  }

  update(metaConfig?: Partial<MetaConfig>, metaConfigOg?: Partial<MetaConfigOg>): void {
    const config: MetaConfig = { ...this.metaConfig, ...metaConfig };
    const configOg: MetaConfigOg = { ...this.metaConfigOg, ...metaConfigOg };
    this.setCanonicalUrl(config.url);
    this.titleService.setTitle(`${config.title} | ${this.environmentService.environments.brand}`);
    this.setMateProperty('description', config.description);
    this.setMateProperty('keywords', config.keywords);
    this.setMateProperty('og:title', `${configOg.title ?? config.title} | ${this.environmentService.environments.brand}`);
    this.setMateProperty('og:description', configOg.description ?? config.description);
    this.setMateProperty('og:type', configOg.type);
    this.setMateProperty('og:locale', configOg.locale ?? this.localeId);
    this.setMateProperty('og:site_name', configOg.siteName ?? this.environmentService.environments.brand);
    this.setMateProperty('og:image', `${this.environmentService.environments.appHost}${configOg.image}`);
    this.setMateProperty('og:image:type', configOg.imageType);
    this.setMateProperty('og:image:width', configOg.imageWidth);
    this.setMateProperty('og:image:height', configOg.imageHeight);
  }

  private setCanonicalUrl(url?: string): void {
    const link = (this.document.getElementById('canonical') ?? this.document.createElement('link')) as HTMLElement;
    link.setAttribute('rel', 'canonical');
    link.setAttribute('id', 'canonical');
    link.setAttribute('href', this.getCanonicalURL(url));
    if (!this.document.getElementById('canonical')) {
      this.document.head.appendChild(link);
    }
  }

  private getCanonicalURL(url?: string): string {
    return `${this.environmentService.environments.appHost}${url ?? this.router.url}`;
  }

  private setMateProperty(name: string, content: string): void {
    const id = `meta-${name}`;
    const has = !!this.document.getElementById(id);
    const meta: MetaDefinition = { id, name, content };

    if (has) {
      this.meta.updateTag(meta);
    } else {
      this.meta.addTag(meta);
    }
  }
}
