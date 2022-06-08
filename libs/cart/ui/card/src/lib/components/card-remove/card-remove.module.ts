import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CardRemoveComponent } from './card-remove.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [CardRemoveComponent],
  exports: [CardRemoveComponent]
})
export class CardRemoveModule { }
