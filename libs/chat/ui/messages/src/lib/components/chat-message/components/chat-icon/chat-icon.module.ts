import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatPipesModule } from '@regshop/chat/ui/pipes';

import { ChatIconComponent } from './chat-icon.component';

@NgModule({
  imports: [CommonModule, ChatPipesModule],
  declarations: [ChatIconComponent],
  exports: [ChatIconComponent]
})
export class ChatIconModule { }
