import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BeersModule } from './beers/beers.module';
import { CoreModule } from './core/core.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BeersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
