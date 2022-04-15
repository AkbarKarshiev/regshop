import { Pipe, PipeTransform } from '@angular/core';
import { NavigationService } from '@regshop/core/navigation/service';
import { ApiService } from '@regshop/core/api/service';

@Pipe({
  name: 'externalPath'
})
export class NavigationExternalPathPipe implements PipeTransform {
  constructor(private readonly navigationService: NavigationService, private readonly apiService: ApiService) {}

  transform(path: string, params?: Record<string, string | number>): string {
    return this.apiService.makeUrl(this.navigationService.getRoute(path, params).join('/').slice(1));
  }
}
