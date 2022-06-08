import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { CardTitleComponent } from './card-title.component';

@NgModule({
  imports: [NavigationPipesModule, RouterModule],
  declarations: [CardTitleComponent],
  exports: [CardTitleComponent]
})
export class CardTitleModule { }
