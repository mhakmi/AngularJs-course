(function(){
  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'app/menuapp/templates/home.view.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'app/menuapp/templates/categories.view.template.html',
      controller: 'CategoriesViewController as catsCtrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{catShortName}',
      templateUrl: 'app/menuapp/templates/items.view.template.html',
      controller: 'ItemsViewController as itemsCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.catShortName);
        }]
      }
    });
  }
})();
