import { Component } from '@angular/core';
import { Request } from './models/Request';
import { AppComponent } from './app.component';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'requests-page',
    templateUrl: './templates/requests.component.html',
    styleUrls: ['./styles/app.component.css']
})

export class RequestsComponent {

    public firebase;
    public requests;
    public request;

    constructor(private angularFire: AngularFireDatabase) {
        this.request = null;
        this.firebase = this.angularFire.list('/requests');
    }

    getRequests() {
        return this.angularFire.list('/requests').valueChanges();
    }

    ngOnInit() {
        this.getRequests().subscribe(res => {
            console.log(res);
            this.requests = res;
        });
        console.log(this.requests)
    }

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
