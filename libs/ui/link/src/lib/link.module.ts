import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkDirective } from './link.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [LinkDirective],
  exports: [LinkDirective]
})
export class LinkModule {}
