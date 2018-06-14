import { Component } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./app.component.css']
})

export class HomeComponent
{
  title = 'app';
  
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
}
