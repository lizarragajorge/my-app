import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RequestsComponent } from './requests.component';
import { ProfileComponent } from './profile.component';
import { ActionsComponent } from './actions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    RequestsComponent,
    ProfileComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
