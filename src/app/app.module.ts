import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { TestComponent } from './test/test.component';

import { AppRoutingModule } from './/app-routing.module';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    TestComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
