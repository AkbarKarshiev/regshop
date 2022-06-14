import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatPipesModule } from '@regshop/chat/ui/pipes';

import { ChatMessagesComponent } from './chat-messages.component';
import { ChatDateModule } from './components/chat-date/chat-date.module';
import { ChatMessageModule } from './components/chat-message/chat-message.module';

@NgModule({
  imports: [CommonModule, ChatDateModule, ChatPipesModule, ChatMessageModule],
  declarations: [ChatMessagesComponent],
  exports: [ChatMessagesComponent]
})
export class ChatUiMessagesModule {}
