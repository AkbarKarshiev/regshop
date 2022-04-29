import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, NavModule],
  exports: [MenuComponent]
})
export class MenuModule { }
