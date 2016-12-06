import {Component} from 'angular2/core'

@Component({
    selector: 'sbscription-form',
    templateUrl:'app/subscription-form.component.html'
})

export class SubscriptionFormComponent {

    frequencies = [
        { id: 1, label: 'Daily' },
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];

    onSubSubmit(form){
        console.log(form);
    }
}