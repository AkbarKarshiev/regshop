import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ChatMessage } from '@regshop/chat/common';

@Component({
  selector: 'regshop-chat-icon',
  templateUrl: './chat-icon.component.html',
  styleUrls: ['./chat-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatIconComponent {
  @Input() chatMessage!: ChatMessage;
}
