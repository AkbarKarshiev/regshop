import { NgModule } from '@angular/core';

import { ColumnComponent } from './column.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ColumnComponent],
  exports: [ColumnComponent]
})
export class ColumnModule { }
