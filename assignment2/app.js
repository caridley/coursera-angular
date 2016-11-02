(function() {
  'use strict';
  angular.module("ShoppingCheckOffApp", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

   function ShoppingListCheckOffService() {
     var service = this;
     var toBuyList = [
       { name: "Cookies", quantity: 6 },
       { name: "Bananas", quantity: 2 },
       { name: "Apples", quantity: 8 },
       { name: "Water", quantity: 4 },
       { name: "Steak", quantity: 20 }
     ];
     var boughtList = [];

     service.buyItem = function(itemIndex) {
       boughtList.push(toBuyList[itemIndex]);
       toBuyList.splice(itemIndex, 1);
     };
     service.getToBuyList = function() {
       return toBuyList;
     };
     service.getBoughtList = function() {
       return boughtList;
     };

   };

   ToBuyController.$inject=["ShoppingListCheckOffService"];
   function ToBuyController(service) {
     var controller = this;
     controller.toBuyList = service.getToBuyList();
     controller.hasItemsToBuy = function() {
       return controller.toBuyList.length > 0;
     };
     controller.buyItem = service.buyItem;
   }

   AlreadyBoughtController.$inject=["ShoppingListCheckOffService"];
   function AlreadyBoughtController(service) {
     var controller = this;
     controller.boughtList = service.getBoughtList();
     controller.hasBoughtItems = function() {
       return controller.boughtList.length > 0;
     };
   }





})();
