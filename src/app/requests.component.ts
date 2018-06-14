import { Component } from '@angular/core';
import { Request } from './Request';

@Component({
  selector: 'requests-page',
  templateUrl: './requests.component.html',
  styleUrls: ['./app.component.css']
})

export class RequestsComponent
{
  heroes = [
    new Request("Brandon", "Buchanan", "Golf"),
    new Request("Jorge", "Garcia", "Rocket League"),
    new Request("Drake", "Loud", "Coffee"),
    new Request("Pierre", "Pierre", "Crossaint"),
    new Request("Brandon", "Buchanan", "Golf"),
    new Request("Jorge", "Garcia", "Rocket League"),
    new Request("Drake", "Loud", "Coffee"),
    new Request("Pierre", "Pierre", "Crossaint")
  ]
}
