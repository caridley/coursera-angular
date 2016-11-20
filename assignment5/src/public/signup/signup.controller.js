(function() {
  'use strict';

  angular.module('public').controller('SignupController', SignupController);

  SignupController.$inject = ['SignupService', 'MenuService'];
  function SignupController(SignupService, MenuService) {
    var $ctrl = this;

    $ctrl.submitted = false;
    $ctrl.invalidMenuItem = false;

    $ctrl.submit = function() {
      MenuService.getMenuItem($ctrl.favoriteDish).then(
        function(menuItem) {
          SignupService.setSignupInfo({
            firstName: $ctrl.firstName,
            lastName: $ctrl.lastName,
            phone: $ctrl.phone,
            email: $ctrl.email,
            favoriteDish: $ctrl.favoriteDish,
          });
          $ctrl.submitted = true;
          $ctrl.invalidMenuItem = false;
        },
        function(error) {
          $ctrl.invalidMenuItem = true;
          $ctrl.submitted = false;
        });
    }
  }



})();
