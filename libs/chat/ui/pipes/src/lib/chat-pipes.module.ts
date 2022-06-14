import { NgModule } from '@angular/core';

import { ChatDateCanPipe } from './chat-date-can.pipe';
import { ChatIconPipe } from './chat-icon.pipe';
import { ChatIconCanPipe } from './chat-icon-can.pipe';

const pipe = [ChatDateCanPipe, ChatIconPipe, ChatIconCanPipe];

@NgModule({
  declarations: pipe,
  exports: pipe
})
export class ChatPipesModule {}
