import { Action } from '@ngrx/store';

import * as ChatActions from './chat.actions';
import { ChatEntity } from './chat.models';
import { State, initialState, reducer } from './chat.reducer';

describe('Chat Reducer', () => {
  const createChatEntity = (id: string, name = ''): ChatEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Chat actions', () => {
    it('loadChatSuccess should return the list of known Chat', () => {
      const chat = [
        createChatEntity('PRODUCT-AAA'),
        createChatEntity('PRODUCT-zzz'),
      ];
      const action = ChatActions.loadChatSuccess({ chat });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
