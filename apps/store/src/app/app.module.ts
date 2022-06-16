import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HammerModule } from '@regshop/core/hammer';

import { AppComponent } from './app.component';
import { AppCoreModule } from './app.core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'regshop' }),
    AppCoreModule,
    AppRoutingModule,
    HammerModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
