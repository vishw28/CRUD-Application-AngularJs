import {Control,ControlGroup} from 'angular2/common';
import {ConfirmPasswordValidator} from './confirmpasswordValidators'
export class newpasswordValidator {
    static minLenghtPwd(control: Control) {
        const minLength = 5;

        if (control.value == '')
            return null;

        if (control.value.length < minLength)
            return {
                minLenghtPwd: {
                    minLength: minLength
                }
            };

        return null;
    }

}