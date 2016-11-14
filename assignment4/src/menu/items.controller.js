(function () {
  'use strict';

  angular.module('MenuApp').controller('ItemsController', ItemsController);

  ItemsController.$inject = ['category'];
  function ItemsController(category) {
    var ctrl = this;
    ctrl.categoryName = category.category.name;
    ctrl.menuItems = category.menu_items;
  }

})();
