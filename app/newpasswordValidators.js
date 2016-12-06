System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var newpasswordValidator;
    return {
        setters:[],
        execute: function() {
            newpasswordValidator = (function () {
                function newpasswordValidator() {
                }
                newpasswordValidator.minLenghtPwd = function (control) {
                    var minLength = 5;
                    if (control.value == '')
                        return null;
                    if (control.value.length < minLength)
                        return {
                            minLenghtPwd: {
                                minLength: minLength
                            }
                        };
                    return null;
                };
                return newpasswordValidator;
            }());
            exports_1("newpasswordValidator", newpasswordValidator);
        }
    }
});
//# sourceMappingURL=newpasswordValidators.js.map