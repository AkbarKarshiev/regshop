import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { ApiService } from '@regshop/core/api/service';
import { EnvironmentService } from '@regshop/core/environments/service';
import { Product, ProductsResponse } from '../../../common/src/lib/product.interface';

export const PRODUCT_API_ROUTES = {
  load: (payload: { id: string; name: string; key: string } | undefined) => {
    if (payload) {
      return `https://sheets.googleapis.com/v4/spreadsheets/${payload.id}/values/${payload.name}?key=${payload.key}`;
    }

    return 'https://sheets.googleapis.com/v4/spreadsheets';
  }
};

export function castProduct(response: ProductsResponse): Product[] {
  return response.values.map(([slug, title, subtitle, price, sizes, description, photos], index) => ({
    id: index + 1,
    slug: slug.trim(),
    title: title.trim(),
    subtitle: subtitle.trim(),
    price: Number(price.trim()),
    sizes: sizes.split(',').map((size) => Number(size.trim())),
    description: description.trim(),
    photos: photos.split('\n').map((photo) => photo.trim()),
  }));
}

@Injectable()
export class ProductApiService {

  constructor(
    private readonly apiService: ApiService,
    private readonly environmentService: EnvironmentService
  ) { }

  load(): Observable<Product[]> {
    if (this.environmentService.environments.google?.key) {
      console.warn('Google Sheet was not loaded. Check your envs.');

      return of([]);
    }

    return this.apiService
      .get<ProductsResponse>(PRODUCT_API_ROUTES.load(this.environmentService.environments.google))
      .pipe(map((response: ProductsResponse) => castProduct(response)));
  }
}
