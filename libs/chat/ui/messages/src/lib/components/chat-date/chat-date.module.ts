import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatDateComponent } from './chat-date.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChatDateComponent],
  exports: [ChatDateComponent]
})
export class ChatDateModule { }
