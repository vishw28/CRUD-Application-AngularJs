import {Component} from 'angular2/core';
import {ChangePasswordFormComponent} from './change-password-form.component'

@Component({
    selector: 'my-app',
    template:`  
            <changepwd-form></changepwd-form>    
            `,
    directives:[ChangePasswordFormComponent]
})
export class AppComponent {


}