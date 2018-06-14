import {Component} from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent
{
    value = 0;

    decrease()
    {
        this.value--;
    }
    increase()
    {
        this.value++;
    }

}