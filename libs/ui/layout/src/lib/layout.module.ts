import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';
import { ContainerModule } from '@regshop/ui/container';
import { LogoModule } from './components/logo/logo.module';
import { ActionsModule } from './components/header/actions/actions.module';

@NgModule({
  imports: [CommonModule],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
