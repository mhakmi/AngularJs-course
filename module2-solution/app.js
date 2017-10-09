(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuy();

        toBuy.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.items = ShoppingListCheckOffService.getBought();
    }

    function ShoppingListCheckOffService() {
        var srv = this;

        //List of ToBuy items
        var toBuyLst = [
            { name: 'Chips', quantity: 3 },
            { name: 'Bananas', quantity: 1 },
            { name: 'Apples', quantity: 2 },
            { name: 'Soda', quantity: 6 },
            { name: 'Chocolates', quantity: 2 }
        ];

        srv.getToBuy = function () {
            return toBuyLst;
        };

        //List of AlreadyBought items
        var boughtLst = [];

        srv.getBought = function () {
            return boughtLst;
        };

        srv.buyItem = function (index) {
            boughtLst.push(toBuyLst.splice(index, 1)[0]);
        };
    }
})();