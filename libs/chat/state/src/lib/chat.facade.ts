import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs';

import * as ChatActions from './chat.actions';
import * as ChatSelectors from './chat.selectors';

@Injectable()
export class ChatFacade {
  loaded$ = this.store.select(ChatSelectors.selectLoaded);

  chatMessages$ = this.store.select(ChatSelectors.selectChatMessages);

  chatMessagesEntities$ = this.store.select(ChatSelectors.selectChatMessagesEntities);

  createMessageSuccess$ = this.actions$.pipe(
    ofType(ChatActions.createMessageSuccess),
    map(({ chatMessage }) => chatMessage)
  );

  createMessageFailure$ = this.actions$.pipe(
    ofType(ChatActions.createMessageFailure),
    map(({ error }) => error)
  );

  constructor(
    private readonly store: Store,
    private readonly actions$: Actions
  ) {}

  addMessage(message: string, isOwner: boolean = true): void {
    this.dispatch(ChatActions.createMessage({ chatMessageCreate: { message, isOwner } }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
