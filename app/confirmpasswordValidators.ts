import {Control,ControlGroup} from 'angular2/common';

export class ConfirmPasswordValidator{
    static passwordsShouldMatch(group: ControlGroup){
            var newPassword = group.find('newpwd').value;;
            var confirmPassword = group.find('confirmpwd').value;;

            if (newPassword == '' || confirmPassword == '')
                return null;

            if (newPassword != confirmPassword)
                return { passwordsShouldMatch: true };

            return null;
        }
}