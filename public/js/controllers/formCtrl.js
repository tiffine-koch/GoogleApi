'use strict';

var app = angular.module('googleApp');

app.controller('formCtrl', function($scope, $http) {
  console.log('form');

  $scope.submitForm = function() {
    var location = {name: $scope.location.name, image: $scope.location.image, date: $scope.location.date, bio: $scope.location.bio, zip: $scope.location.zip};
    console.log(location);
    $http({
      method: 'POST',
      url: '/locations',
      data: location
      }).then(function(response){
        swal("Your location has been uploaded!");
      }, function(err){
        console.error(err);
      })
      $scope.location = {};
    }
});
