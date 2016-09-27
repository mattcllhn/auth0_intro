console.log('js sourced');
var myApp = angular.module('myApp',[]);

myApp.controller('authController', ['$scope','$http',function($scope,$http){
  console.log('in authController');

  $scope.showNHide = function(){
    $scope.showStuff = !$scope.showStuff;

  };
}]);//myapp controller
