import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';

import { OrderNotifySuccessComponent } from './order-notify-success.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationPipesModule, MatDialogModule, MatButtonModule],
  declarations: [OrderNotifySuccessComponent],
  exports: [OrderNotifySuccessComponent]
})
export class OrderNotifySuccessModule { }
