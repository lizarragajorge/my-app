import { Component } from '@angular/core';
import { Person } from './Person';
import { Activity } from './Activity';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'profile-page',
    templateUrl: './profile.component.html',
    styleUrls: ['./app.component.css']
})

export class ProfileComponent {

    public activity;
    public activities;
    public firebase;

    constructor(private angularFire: AngularFireDatabase) {
        this.activity = new Person("Brandon", "Buchanan");
        this.firebase = this.angularFire.list('/activity');
    }

    getActivity() {
        return this.angularFire.list('/activity').valueChanges();
    }

    ngOnInit() {
        this.getActivity().subscribe(res => {
            this.activities = res;
        });
    }

    title = 'app';

    addActivity() {
        console.log(this.activity);
        if (this.activity) {
            this.firebase.push({
                activity: this.activity,
                createdDate: (new Date()).getTime()
            });
        } else {
            alert('Enter task');
        }
    }

}
