import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar.component';
import { LogoModule } from '../logo/logo.module';
import { NavModule } from '../nav/nav.module';
import { CopyrightModule } from '../footer/components/copyright/copyright.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, LogoModule, NavModule, CopyrightModule],
  exports: [SidebarComponent]
})
export class SidebarModule { }
