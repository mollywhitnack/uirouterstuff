'use strict'

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope){
  $scope.something = 'red';
  console.log("mainCtrl!");
});

app.controller('swapiCtrl', function($scope, $state, Samurai){
  console.log("swapiCtrl")

  Samurai.getAll()
  .then(res=>{
    console.log('res.data:',res.data);
    $scope.samurai = res.data;
  })
  .catch(err=>{
    console.error('err:', err);
  });

  console.log("$state:", $state)

  $scope.something  = 'blue';
  $scope.clickButton = () =>{
    console.log("click!");
    $state.go('home');
  };
});








