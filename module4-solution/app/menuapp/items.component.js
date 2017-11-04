(function(){
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'app/menuapp/templates/items.template.html',
      bindings: {
        items: '<'
      }
    })
})();
