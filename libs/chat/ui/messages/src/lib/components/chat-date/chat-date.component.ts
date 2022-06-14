import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ChatMessage } from '@regshop/chat/common';

@Component({
  selector: 'regshop-chat-date',
  templateUrl: './chat-date.component.html',
  styleUrls: ['./chat-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatDateComponent {
  @Input() chatMessage!: ChatMessage;
}
