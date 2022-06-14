import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { ChatMessage, ChatMessageCreate } from '@regshop/chat/common';

export const init = createAction('[Chat] Init');

export const restore = createAction('[Chat] Restore', props<{ chatMessages: ChatMessage[] | null }>());

export const createMessage = createAction('[Chat] Create Message', props<{ chatMessageCreate: ChatMessageCreate }>());

export const createMessageSuccess = createAction('[Chat] Create Message Success', props<{ chatMessage: ChatMessage }>());

export const createMessageFailure = createAction('[Chat] Create Message Failure', props<{ error: HttpErrorResponse }>());
