(function() {
  angular.module('LunchCheckApp', [])
  .controller('LunchCheckController', function($scope) {
    $scope.lunchDishes = "";
    $scope.message = "";
    $scope.checkIfTooMuch = function() {
      var count = countCommaSeparatedItems($scope.lunchDishes);
      if(!count) {
        $scope.message = "Please enter data first";
        $scope.messageStatus = "invalidInput";
      } else if (count <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageStatus = "validInput";
      } else {
        $scope.message = "Too much!";
        $scope.messageStatus = "validInput";
      }
    }

    function countCommaSeparatedItems(string) {
      var items = string.split(',');
      var nonEmptyItems = [];
      for(var i = 0; i < items.length; i++) {
        var item = items[i].trim();
        if(item.length > 0) {
          nonEmptyItems.push(item)
        }
      }
      return nonEmptyItems.length;
    }
  });

})();
