(function() {
  'use strict';

  angular.module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .directive("foundItems", FoundItemsDirective)
    .constant("menuUrl", "https://davids-restaurant.herokuapp.com/menu_items.json");

  MenuSearchService.$inject = ["$http", "$q", "menuUrl"];
  function MenuSearchService($http, $q, menuUrl) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      searchTerm = searchTerm.trim();
      if(searchTerm.length === 0) {
        return $q(function(resolve, reject) {
          resolve([]);
        });
      }
      return $http( {
        method: "GET",
          url: menuUrl
        }).then(function(response) {
          var allItems = response.data.menu_items;
          var foundItems = [];
          var searchTerms = searchTerm.toLowerCase().split(' ');
          for(var i = 0; i < allItems.length; i++) {
            var item = allItems[i];
            var itemString = item.name + ' ' + item.description;
            if(service.stringMatchesSearchTerms(itemString.toLowerCase(), searchTerms)) {
              foundItems.push(item);
            }
          }
          return foundItems;
        });
    };

    service.stringMatchesSearchTerms = function(string, searchTerms) {
      for(var i = 0; i < searchTerms.length; i++) {
        if(string.indexOf(searchTerms[i]) === -1) {
          return false;
        }
      }
      return true;
    }
  }

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController (menuSearchService) {
    var ctrl = this;
    ctrl.searchTerm = "";
    ctrl.found = [];
    ctrl.didSearch = false;
    ctrl.nothingFound = function() {
      return ctrl.didSearch && !ctrl.found.length;
    }
    ctrl.getMatchedMenuItems =  function() {
      menuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(
        function(result) {
          ctrl.didSearch = true;
          ctrl.found = result;
        }
      )
    };
    ctrl.removeItem = function(index) {
      ctrl.found.splice(index, 1);
    }
  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: "found-items.html",
      scope: {
        "found": "=",
        "onRemove" : "&",
      },
      restrict: 'E',
    };
    return ddo;
  }

})();
