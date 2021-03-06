import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigurableLibModule } from 'configurable-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './app-config';
import { AppDynamicComponent } from './app-dynamic/app-dynamic.component';
import { AppServiceService } from './app-service.service';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AppDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // When overridding is required
    ConfigurableLibModule.doOverride({
      components: [{ LibDynamicComponent: AppDynamicComponent }],
      services: { ConfigurableLibService: AppServiceService },
      config: AppConfig
    }),

    // // When overridding is not required
    // ConfigurableLibModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: window.location.pathname
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
