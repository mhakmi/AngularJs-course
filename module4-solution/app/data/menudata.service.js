(function(){
  'use strict';
  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http){
    var srv = this;

    srv.getAllCategories = function() {
      return $http({
        method: 'GET',
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      }).then(function(result){
        return result.data;
      }).catch(function(error){
        console.log('Error', error);
      });
    };

    srv.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: 'GET',
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
      }).then(function(result){
        return result.data;
      }).catch(function(error){
        console.log('Error', error);
      });
    };


  }

})();
