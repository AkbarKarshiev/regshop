import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@regshop/ui/container';

import { HeaderModule } from './components/header/header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { FooterModule } from './components/footer/footer.module';
import { MenuModule } from './components/menu/menu.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [CommonModule, HeaderModule, RouterModule, ContainerModule, SidebarModule, FooterModule, MenuModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}
