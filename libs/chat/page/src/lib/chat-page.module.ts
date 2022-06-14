import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatStateModule } from '@regshop/chat/state';
import { ChatMessagesModule } from '@regshop/chat/ui/messages';
import { ChatFormModule } from '@regshop/chat/ui/form';

import { ChatPageRoutingModule } from './chat-page-routing.module';

import { ChatPageComponent } from './chat-page.component';

@NgModule({
  imports: [CommonModule, ChatPageRoutingModule, ChatStateModule, ChatMessagesModule, ChatFormModule],
  declarations: [ChatPageComponent],
})
export class ChatPageModule {}
