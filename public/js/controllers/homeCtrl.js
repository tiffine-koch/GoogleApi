'use strict';

var app = angular.module('googleApp');

app.controller('homeCtrl', function($scope, $http) {
  console.log('home');
});

app.controller('formCtrl', function($scope, $http) {
  console.log('form');
});
