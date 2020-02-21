import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigurableLibModule } from 'configurable-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './app-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // // When overridding is required
    // ConfigurableLibModule.doOverride({
    //   config: AppConfig
    // }),

    // When overridding is not required
    ConfigurableLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
