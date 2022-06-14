import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ChatMessage } from '@regshop/chat/common';
import { ChatFacade } from '@regshop/chat/state';

@Component({
  selector: 'regshop-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatPageComponent implements OnInit {
  chatMessages$!: Observable<ChatMessage[]>;

  constructor(private readonly chatFacade: ChatFacade) { }

  ngOnInit(): void {
    this.chatMessages$ = this.chatFacade.chatMessages$;
  }
}
