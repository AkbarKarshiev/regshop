import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from '@regshop/ui/carousel';
import { ContainerModule } from '@regshop/ui/container';
import { GridModule } from '@regshop/ui/grid';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    CarouselModule,
    ContainerModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
