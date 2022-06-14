import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { ChatMessage } from '@regshop/chat/common';

@Component({
  selector: 'regshop-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatBoxComponent {
  @Input() chatMessage!: ChatMessage;
  @Input() lastOwner!: boolean | null;

  @HostBinding('class.is-last-owner') get isLastOwner(): boolean {
    return !!this.lastOwner;
  }
}
