import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { LogoComponent } from './logo.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationPipesModule],
  declarations: [LogoComponent],
  exports: [LogoComponent],
})
export class LogoModule { }
