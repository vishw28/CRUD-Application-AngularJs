import {Component} from 'angular2/core'
import {ControlGroup,Control} from "angular2/src/common/forms/model";
import {Validators} from "angular2/src/common/forms/validators";
import{FormBuilder} from 'angular2/common';
import {UsernameValidator} from './usernameValidators'

@Component({
    selector:'signup-form',
    templateUrl:'app/signup-form.component.html'
})

export class SignUpFormComponent{

   form: ControlGroup;

    constructor(fb:FormBuilder){
        this.form = fb.group ({
            username:['',Validators.compose([
                Validators.required,
                UsernameValidator.cannotContainSpace
            ]),UsernameValidator.shouldBeUnique],
            password:['',Validators.required]
        });
    }

   // form = new ControlGroup({
   //     username: new Control('',Validators.required),
    //    password: new Control('',Validators.required)
    //});

    signup(){

        this.form.find('username').setErrors({
            invalidLogin: true
        });

        console.log(this.form.value);
    }
}