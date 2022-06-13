import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { OrderNotifyFailureComponent } from './order-notify-failure.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [OrderNotifyFailureComponent],
  exports: [OrderNotifyFailureComponent]
})
export class OrderNotifyFailureModule { }
