(function(){
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'app/menuapp/templates/categorise.template.html',
      bindings: {
        categories: '<'
      }
    })
})();
