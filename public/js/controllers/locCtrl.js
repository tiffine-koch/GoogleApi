'use strict';

var app = angular.module('googleApp');

app.controller('locationsCtrl', function($rootScope, $scope, $http, LocService) {

  initMap();
  LocService.getAll()
  .then(function(res) {
    $scope.locations = res.data;
    console.log('res:', res);
  }, function(err) {
    console.err('err:', err);
  })

  $scope.singleLocation = function(location) {
    var id = location._id;
    LocService.getOne(id)
      .then(function(response){
        $rootScope.location = response.data;
        var location = $scope.location;
      }, function(error){
        console.log('error');
    });
  }
  function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: false,
      zoom: 8
    });
    $scope.map = map;
  }
});


  app.controller('mapCtrl', function($rootScope, $scope, $http) {
    console.log('mapCtrl');
  });
