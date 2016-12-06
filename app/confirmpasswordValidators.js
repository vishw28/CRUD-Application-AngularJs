System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ConfirmPasswordValidator;
    return {
        setters:[],
        execute: function() {
            ConfirmPasswordValidator = (function () {
                function ConfirmPasswordValidator() {
                }
                ConfirmPasswordValidator.passwordsShouldMatch = function (group) {
                    var newPassword = group.find('newpwd').value;
                    ;
                    var confirmPassword = group.find('confirmpwd').value;
                    ;
                    if (newPassword == '' || confirmPassword == '')
                        return null;
                    if (newPassword != confirmPassword)
                        return { passwordsShouldMatch: true };
                    return null;
                };
                return ConfirmPasswordValidator;
            }());
            exports_1("ConfirmPasswordValidator", ConfirmPasswordValidator);
        }
    }
});
//# sourceMappingURL=confirmpasswordValidators.js.map