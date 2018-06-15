import { Component } from '@angular/core';
import { Request } from './models/Request';

@Component({
    selector: 'requests-page',
    templateUrl: './templates/requests.component.html',
    styleUrls: ['./styles/app.component.css']
})

export class RequestsComponent {
    sentRequests = [
        new Request("George", "Bush", "Golf"),
        new Request("Barack", "Obama", "Hoops"),
        new Request("Abraham", "Lincoln", "Movies")
    ]
    recievedRequests = [
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
