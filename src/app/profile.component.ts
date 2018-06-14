import { Component } from '@angular/core';
import { Person } from './Person';
import { Activity } from './Activity';

@Component({
    selector: 'profile-page',
    templateUrl: './profile.component.html',
    styleUrls: ['./app.component.css']
})

export class ProfileComponent {
    title = 'app';

    activities = [
    new Activity("Food", "utensils"),
    new Activity("Coffee", "coffee"),
    new Activity("Drinks", "beer"),
    new Activity("Football", "football-ball"),
    new Activity("Soccer", "futbol"),
    new Activity("Chess", "chess"),
    new Activity("Hockey", "hockey-puck"),
    new Activity("Reading", "book-open"),
    new Activity("Bird Watching", "crow")
];
}
