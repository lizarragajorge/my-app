import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { HomeComponent } from './home.component';
import { RequestsComponent } from './requests.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent, 
    RequestsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
