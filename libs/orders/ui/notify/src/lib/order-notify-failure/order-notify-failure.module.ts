import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { OrderNotifyFailureComponent } from './order-notify-failure.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, NavigationPipesModule, RouterModule],
  declarations: [OrderNotifyFailureComponent],
  exports: [OrderNotifyFailureComponent]
})
export class OrderNotifyFailureModule { }
