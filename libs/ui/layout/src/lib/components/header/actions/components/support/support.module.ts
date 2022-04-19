import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { SupportComponent } from './support.component';

@NgModule({
  declarations: [SupportComponent],
  exports: [SupportComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule, NavigationPipesModule]
})
export class SupportModule { }
