(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('CategoriesViewController', CategoriesViewController);

  CategoriesViewController.$inject = ['categories'];
  function CategoriesViewController(categories){
    var catsCtrl = this;

    catsCtrl.categories = categories;
    console.log(categories);
  }

})();
