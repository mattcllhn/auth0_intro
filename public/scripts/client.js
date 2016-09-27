console.log('js sourced');
var myApp = angular.module('myApp',[]);
var lock = new Auth0Lock('PLvMpMQ4IPOQ8Xl7AHpxYHTFXq9Nt1Or','mattcllhn.auth0.com');

myApp.controller('authController', ['$scope','$http',function($scope,$http){
  console.log('in authController');

  $scope.showNHide = function(){
    $scope.showStuff = !$scope.showStuff;

  };//showNHide

$scope.logIn = function(){
  console.log('button click works');
lock.show(function(err,profile,token){
  if(err){
    console.log(err);
  }else {
    console.log('success!',profile);
  }
});//lock.show
};//logIn
}]);//myapp controller
