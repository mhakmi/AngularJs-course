(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsViewController', ItemsViewController);

  ItemsViewController.$inject = ['items'];
  function ItemsViewController(items){
    var itemsCtrl = this;

    itemsCtrl.items = items;
    console.log('items', items);
  }

})();
