import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { TestComponent } from './test/test.component';

import { AppRoutingModule } from './/app-routing.module';
import { TrainerComponent } from './trainer/trainer.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    TestComponent,
    TrainerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
