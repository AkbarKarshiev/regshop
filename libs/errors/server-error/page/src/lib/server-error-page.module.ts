import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ErrorsCardModule } from '@regshop/errors/ui/card';
import { LinkModule } from '@regshop/ui/link';
import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { ServerErrorPageRoutingModule } from './server-error-page-routing.module';
import { ServerErrorPageComponent } from './server-error-page.component';

@NgModule({
  imports: [ServerErrorPageRoutingModule, ErrorsCardModule, LinkModule, NavigationPipesModule, MatButtonModule],
  declarations: [ServerErrorPageComponent],
})
export class ServerErrorPageModule {}
