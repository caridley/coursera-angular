(function() {
  'use strict';

  angular.module('public').controller('MyinfoController', MyinfoController);

  MyinfoController.$inject = ['signupInfo', 'menuItem'];
  function MyinfoController(signupInfo, menuItem) {
    var $ctrl = this;
    $ctrl.signupInfo = signupInfo;
    $ctrl.menuItem = menuItem;
  }



})();
