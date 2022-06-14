import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, concatLatestFrom, OnInitEffects } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { take } from 'rxjs';

import { ChatKeys, ChatMessage } from '@regshop/chat/common';
import { LocalAsyncStorageService } from '@regshop/core/storage/local';

import * as ChatActions from './chat.actions';
import * as ChatSelectors from './chat.selectors';

@Injectable()
export class ChatEffects implements OnInitEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.init),
      concatLatestFrom(() => this.localAsyncStorage.getItem<ChatMessage[] | null>(ChatKeys.ChatMessages).pipe(take(1))),
      fetch({
        run: (action, chatMessages) => {
          return ChatActions.restore({ chatMessages });
        }
      })
    )
  );

  restore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.restore),
      fetch({
        run: ({ chatMessages }) =>
          // @ts-ignore
          !chatMessages.length
            ? ChatActions.createMessage({ chatMessageCreate: { message: 'Hello. How can I help you?', isOwner: false } })
            : undefined
      })
    )
  );

  createMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.createMessage),
      concatLatestFrom(() => this.store.select(ChatSelectors.selectChatMessages)),
      fetch({
        run: (action, chatMessages) =>
          ChatActions.createMessageSuccess({
            chatMessage: {
              id: chatMessages.length > 0 ? chatMessages[chatMessages.length - 1].id + 1 : 1,
              created: new Date().toISOString(),
              isOwner: action.chatMessageCreate.isOwner ?? true,
              message: action.chatMessageCreate.message
            }
          }),
        onError: (action, error) => ChatActions.createMessageFailure({ error })
      })
    )
  );

  createMessageSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.createMessageSuccess),
      concatLatestFrom(() => this.store.select(ChatSelectors.selectChatMessages)),
      fetch({
        run: (action, chatMessages) => this.localAsyncStorage.setItem(ChatKeys.ChatMessages, chatMessages),
      })
    )
  )

  constructor(
    private readonly actions$: Actions,
    private readonly localAsyncStorage: LocalAsyncStorageService,
    private readonly store: Store
  ) {}

  ngrxOnInitEffects(): Action {
    return ChatActions.init();
  }
}
