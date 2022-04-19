import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerModule } from '@regshop/ui/container';

import { LogoModule } from '../logo/logo.module';
import { ActionsModule } from './actions/actions.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, ContainerModule, LogoModule, ActionsModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
