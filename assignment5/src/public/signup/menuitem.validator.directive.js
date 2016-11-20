(function() {
  angular.module('public').directive('menuItemValidator', menuItemValidator);

  menuItemValidator.$inject = ['MenuService', '$q'];
  function menuItemValidator(MenuService, $q) {
    return {
      require: 'ngModel',
      link: function(scope, elem, attrs, ctrl) {
        ctrl.$asyncValidators.menuItemValidator = function(modelValue, viewValue) {
          if(ctrl.$isEmpty(modelValue)) {
            return $q.when();
          }
          return MenuService.getMenuItem(modelValue);
        }
      }
    };
  }
})();
