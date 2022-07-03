import { InjectionToken } from '@angular/core';
import { $localize } from '@angular/localize/init';

export interface MetaConfigOg {
  title: string;
  description: string;
  type: string;
  locale?: string;
  siteName?: string;
  image: string;
  imageType: string;
  imageWidth: string;
  imageHeight: string;
}

export interface MetaConfig {
  readonly title: string;
  readonly description: string;
  readonly keywords: string;
  readonly url?: string;
}

export const META_CONFIG = new InjectionToken<MetaConfig>('MetaConfig');
export const META_CONFIG_OG = new InjectionToken<MetaConfigOg>('MetaConfigOg');

export const META_CONFIG_DEFAULT: MetaConfig = {
  title: $localize`:Meta default|:Online store Regshop`,
  description: $localize`:Meta default|:Regshop t-shirts, tank-tops. Free delivery in Tashkent and all over Uzbekistan when paying on the website.`,
  keywords: $localize`:Meta default|:t-shirts, tank-tops`,
}

export const META_CONFIG_OG_DEFAULT: MetaConfigOg = {
  title: META_CONFIG_DEFAULT.title,
  description: META_CONFIG_DEFAULT.description,
  type: 'website',
  image: '/assets/images/site.jpg',
  imageType: 'image/jpeg',
  imageWidth: '600',
  imageHeight: '284',
}
