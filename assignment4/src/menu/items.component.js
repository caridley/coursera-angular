(function() {
  angular.module('MenuApp').component('items', {
    templateUrl: 'src/menu/templates/items.component.template.html',
    bindings: {
      items: '<'
    }
  });

})();
