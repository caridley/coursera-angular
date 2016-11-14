(function () {
  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    console.log("RoutesConfig");

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'src/menu/templates/home.template.html'
    });

    $stateProvider.state('categories', {
      url: '/categories',
      templateUrl: 'src/menu/templates/categories.controller.template.html',
      controller: 'CategoriesController as controller',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }],
      }
    });

    $stateProvider.state('categories.items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/menu/templates/items.controller.template.html',
      controller: 'ItemsController as controller',
      resolve: {
        category: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }],
      }

    });
  }

})();
