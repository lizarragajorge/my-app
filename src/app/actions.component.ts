import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'actions-page',
    templateUrl: './actions.component.html',
    styleUrls: ['./app.component.css']
})

export class ActionsComponent {
    title = 'app';

    @Output() selectAction = new EventEmitter<string>();

    onSelectAction(a: string) {
        this.selectAction.emit(a);
        console.log("calling select action")
    }
}
