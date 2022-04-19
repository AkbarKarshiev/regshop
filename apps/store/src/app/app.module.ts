import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from '@regshop/ui/carousel';
import { ContainerModule } from '@regshop/ui/container';
import { GridModule } from '@regshop/ui/grid';
import { HeaderModule } from '../../../../libs/ui/layout/src/lib/components/header/header.module';
import { AppCoreModule } from './app.core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    CarouselModule,
    ContainerModule,
    GridModule,
    HeaderModule,
    AppCoreModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
