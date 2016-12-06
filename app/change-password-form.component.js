System.register(['angular2/core', 'angular2/common', "angular2/src/common/forms/validators", "./newpasswordValidators", './confirmpasswordValidators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, validators_1, newpasswordValidators_1, confirmpasswordValidators_1;
    var ChangePasswordFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            },
            function (newpasswordValidators_1_1) {
                newpasswordValidators_1 = newpasswordValidators_1_1;
            },
            function (confirmpasswordValidators_1_1) {
                confirmpasswordValidators_1 = confirmpasswordValidators_1_1;
            }],
        execute: function() {
            ChangePasswordFormComponent = (function () {
                function ChangePasswordFormComponent(fb) {
                    this.form = fb.group({
                        currentpwd: ['', validators_1.Validators.required],
                        newpwd: ['', validators_1.Validators.compose([
                                validators_1.Validators.required,
                                newpasswordValidators_1.newpasswordValidator.minLenghtPwd])],
                        confirmpwd: ['', validators_1.Validators.compose([
                                validators_1.Validators.required
                            ])]
                    }, { validator: confirmpasswordValidators_1.ConfirmPasswordValidator.passwordsShouldMatch });
                }
                ChangePasswordFormComponent.prototype.submit = function (form) {
                    var CurrentPassword = this.form.find('currentpwd');
                    if (CurrentPassword.value != '1234')
                        CurrentPassword.setErrors({ validOldPassword: true });
                    console.log(form);
                };
                ChangePasswordFormComponent = __decorate([
                    core_1.Component({
                        selector: 'changepwd-form',
                        templateUrl: 'app/change-password-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ChangePasswordFormComponent);
                return ChangePasswordFormComponent;
            }());
            exports_1("ChangePasswordFormComponent", ChangePasswordFormComponent);
        }
    }
});
//# sourceMappingURL=change-password-form.component.js.map