(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        ctrl.searchTerm = '';

        ctrl.NarrowItDown = function () {
            ctrl.errorMsg = undefined;
            ctrl.found = [];

            if (ctrl.searchTerm === '') {
                ctrl.errorMsg = 'Nothing Found!';
                return;
            }

            MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
                .then(function (data) {
                    ctrl.found = data;

                    if(!ctrl.found.length)
                        ctrl.errorMsg = 'Nothing Found!';
                });
        };

        ctrl.removeItem = function (index) {
            ctrl.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var srv = this;

        srv.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: 'GET',
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
            }).then(function (result) {

                var items = result.data.menu_items;
                var foundItems = [];

                for (var i = 0; i < items.length; i++) {
                    if (items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                        foundItems.push(items[i]);
                    }
                }

                return foundItems;

            }).catch(function (error) {
                console.log(error);
            });

        }
    }

    function FoundItemsDirective() {
        return {
            restrict: "E",
            templateUrl: 'templates/foundItems.template.html',
            scope: {
                found: '<',
                onRemove: '&'
            }
        };
    }


})();