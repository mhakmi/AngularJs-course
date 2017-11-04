(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('MenuAppController', MenuAppController);

  MenuAppController.$inject = ["MenuDataService"];
  function MenuAppController(MenuDataService){
    var ctrl = this;
    ctrl.categories = [];
    ctrl.test = 'sdlf';
    MenuDataService.getAllCategories()
      .then(function(res){
        ctrl.categories = res;
      });
  }

})();
