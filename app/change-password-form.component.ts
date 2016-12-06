import {Component} from 'angular2/core';
import {ControlGroup,FormBuilder,Control} from 'angular2/common';
import {Validators} from "angular2/src/common/forms/validators";
import {newpasswordValidator} from "./newpasswordValidators";
import {ConfirmPasswordValidator} from './confirmpasswordValidators'

@Component({
    selector: 'changepwd-form',
    templateUrl:'app/change-password-form.component.html'
})

export class ChangePasswordFormComponent{

    form: ControlGroup;

    constructor(fb:FormBuilder){
        this.form = fb.group ({
            currentpwd:['',Validators.required],
            newpwd:['',Validators.compose([
                Validators.required,
                newpasswordValidator.minLenghtPwd])],
            confirmpwd:['',Validators.compose([
                Validators.required
            ])]
        },{ validator: ConfirmPasswordValidator.passwordsShouldMatch });
    }
    submit(form){
        var CurrentPassword = this.form.find('currentpwd');
        if(CurrentPassword.value !='1234')
            CurrentPassword.setErrors({ validOldPassword: true });


        console.log(form);
    }
}