import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ChatEffects } from './chat.effects';
import { ChatFacade } from './chat.facade';
import { CHAT_FEATURE_KEY, reducer } from './chat.reducer';

@NgModule({
  imports: [StoreModule.forFeature(CHAT_FEATURE_KEY, reducer), EffectsModule.forFeature([ChatEffects])],
  providers: [ChatFacade],
})
export class ChatStateModule {}
