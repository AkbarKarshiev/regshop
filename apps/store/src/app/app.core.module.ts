import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ENVIRONMENTS } from '@regshop/core/environments/service';
import { environment } from '../environments/environment';
import { NAVIGATION_PATHS, PATHS } from '@regshop/core/navigation/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment,
    },
    {
      provide: PATHS,
      useValue: NAVIGATION_PATHS,
    },
  ]
})
export class AppCoreModule { }
