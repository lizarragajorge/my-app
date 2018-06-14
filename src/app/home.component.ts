import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from './Person';
import { AppComponent } from './app.component';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./app.component.css']
})

export class HomeComponent
{
  title = 'app';
  actionPage = false;
  public firebase;
  public people;
  public person;

  constructor(private angularFire: AngularFireDatabase) {
    this.person = null;
    this.firebase = this.angularFire.list('/people');
  }

  getActivity() {
    return this.angularFire.list('/people').valueChanges();
  }

  ngOnInit() {
    this.getActivity().subscribe(res => {
      this.people = res;
    });
  }

  @Output() selectPerson=new EventEmitter<string>();

  onSelectPerson(p: string) {
    this.selectPerson.emit(p);
  }

  setActionPage() {
    console.log("calling action page")
    this.actionPage = true;
  }

}
