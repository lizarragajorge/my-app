import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'actions-page',
    templateUrl: './templates/actions.component.html',
    styleUrls: ['./styles/app.component.css']
})

export class ActionsComponent {
    @Output() selectAction = new EventEmitter<string>();

    onSelectAction(a: string) {
        this.selectAction.emit(a);
    }
}
