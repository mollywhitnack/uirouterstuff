'use strict'

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {url: '/', template: '<h1>Home</h1>'})
      .state('about', {url: '/about', template: '<h1>About</h1>'})
      .state('swapi', {url: '/swapi', templateUrl: 'html/swapi.html', controller: 'swapiCtrl'})

    //user tries to go somewhere we dont have, just send to home
    $urlRouterProvider.otherwise('/');
});





