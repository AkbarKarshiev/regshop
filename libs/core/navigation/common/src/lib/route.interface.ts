import { MetaConfig } from '@regshop/core/meta/common';

export interface SitemapConfig {
  loc: string;
  lastmod: string;
  priority: string;
  changefreq: string;
}

export interface RouteData {
  siteMap: SitemapConfig,
  meta: MetaConfig,
  metaOg: MetaConfig
}
