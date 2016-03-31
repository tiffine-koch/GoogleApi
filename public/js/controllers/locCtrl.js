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
    var myLatLng = {lat: 37.773, lng: -122.431};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }

  $scope.map = map;

  $scope.deleteLoc = function(index, location) {
  var id = location._id
  var deleted = $scope.locations.splice(index, 1);
  $http({
    method: 'DELETE',
    url: `/locations/${id}`
  })
  .then(function(data) {
    console.log('success');
  }, function(err) {
    console.error(err);
  })
}
});


  app.controller('mapCtrl', function($rootScope, $scope, $http) {
    console.log('mapCtrl');
  });
