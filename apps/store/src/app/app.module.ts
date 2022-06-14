import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HammerModule } from '@regshop/core/hammer';

import { AppComponent } from './app.component';
import { AppCoreModule } from './app.core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'regshop' }),
    AppRoutingModule,
    AppCoreModule,
    HammerModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
