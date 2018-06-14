import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RequestsComponent } from './requests.component';
import { ProfileComponent } from './profile.component';
import { ActionsComponent } from './actions.component';
import { AskComponent } from './ask.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    RequestsComponent,
    ProfileComponent,
    ActionsComponent,
    AskComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
