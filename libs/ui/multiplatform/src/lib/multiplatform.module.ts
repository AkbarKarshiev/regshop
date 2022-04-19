import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiplatformComponent } from './multiplatform.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MultiplatformComponent],
  exports: [MultiplatformComponent]
})
export class MultiplatformModule {}
