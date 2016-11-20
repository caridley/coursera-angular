(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;

  service.signupInfo = {};

  service.getSignupInfo = function() {
    return service.signupInfo;
  }

  service.setSignupInfo = function(signupInfo) {
    service.signupInfo = signupInfo;
  }

}



})();
