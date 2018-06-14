import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from './Person';
import { AppComponent } from './app.component';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./app.component.css']
})

export class HomeComponent
{
  title = 'app';
  actionPage = false;

  heroes = [
    new Person("Brandon", "Buchanan"),
    new Person("Jorge", "Garcia"),
    new Person("Drake", "Loud"),
    new Person("Pierre", "Pierre"),
    new Person("Brandon", "Buchanan"),
    new Person("Jorge", "Garcia"),
    new Person("Drake", "Loud"),
    new Person("Pierre", "Pierre")
  ]

  @Output() selectPerson=new EventEmitter<string>();

  onSelectPerson(p: string) {
    this.selectPerson.emit(p);
  }

  setActionPage() {
    console.log("calling action page")
    this.actionPage = true;
  }

}
