(function () {
  'use strict';

  angular.module('LunchCheckModel', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.itemsList = "";
    $scope.resMessage = "";
    $scope.resMessageColor = "";

    $scope.checkLunchList = function () {
      if($scope.itemsList == ""){
        $scope.resMessage = "Please enter data first!";
        $scope.resMessageColor = "danger";
      } else {
        var itemsCount = countItems($scope.itemsList);
        if(itemsCount > 0 && itemsCount <= 3){
          $scope.resMessage = "Enjoy!";
        } else {
          $scope.resMessage = "Too much!";
        }
        $scope.resMessageColor = "success";
      }
    };
  }

  function countItems(list){
    var listArray = list.split(',');
    var count = 0;
    for (var i = 0; i < listArray.length; i++) {
      if(listArray[i].trim() != "")
        count++;
    }

    return count;
  }

})();
