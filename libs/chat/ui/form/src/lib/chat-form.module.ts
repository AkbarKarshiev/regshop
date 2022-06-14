import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FormsExtractModule } from '@regshop/core/forms/extract';
import { WidthModule } from '@regshop/ui/width';

import { ChatFormComponent } from './chat-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsExtractModule,
    WidthModule
  ],
  declarations: [ChatFormComponent],
  exports: [ChatFormComponent]
})
export class ChatFormModule {}
