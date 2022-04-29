import { NgModule } from '@angular/core';

import { ContainerModule } from '@regshop/ui/container';

import { CopyrightModule } from './components/copyright/copyright.module';
import { TermsModule } from './components/terms/terms.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [ContainerModule, CopyrightModule, TermsModule],
  exports: [FooterComponent]
})
export class FooterModule { }
