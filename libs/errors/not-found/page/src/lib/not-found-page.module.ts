import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ErrorsCardModule } from '@regshop/errors/ui/card';
import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { NotFoundPageRoutingModule } from './not-found-page-routing.module';
import { NotFoundPageComponent } from './not-found-page.component';

@NgModule({
  imports: [NotFoundPageRoutingModule, ErrorsCardModule, NavigationPipesModule, MatButtonModule],
  declarations: [NotFoundPageComponent],
})
export class NotFoundPageModule {}
