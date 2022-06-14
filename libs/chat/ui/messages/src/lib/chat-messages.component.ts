import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ChatMessage } from '@regshop/chat/common';

@Component({
  selector: 'regshop-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessagesComponent {
  @Input() chatMessages!: ChatMessage[];

  trackByFn(index: number, chatMessage: ChatMessage): number {
    return chatMessage.id;
  }
}
