import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatPipesModule } from '@regshop/chat/ui/pipes';

import { ChatIconModule } from './components/chat-icon/chat-icon.module';
import { ChatBoxModule } from './components/chat-box/chat-box.module';

import { ChatMessageComponent } from './chat-message.component';

@NgModule({
  imports: [CommonModule, ChatIconModule, ChatBoxModule, ChatPipesModule],
  declarations: [ChatMessageComponent],
  exports: [ChatMessageComponent]
})
export class ChatMessageModule { }
