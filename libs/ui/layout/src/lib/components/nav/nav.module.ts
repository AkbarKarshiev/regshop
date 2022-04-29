import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { NavComponent } from './nav.component';
import { NavLinkModule } from './nav-link/nav-link.module';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, NavLinkModule, RouterModule, MatButtonModule, MatIconModule, NavigationPipesModule],
  exports: [NavComponent]
})
export class NavModule { }
