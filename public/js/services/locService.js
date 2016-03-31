'use strict';

var app = angular.module('googleApp');

app.service('LocService', function($http) {

  this.getAll = function() {
    return $http.get('/locations');
  };

  this.getOne= function(id) {
    return $http.get(`/locations/${id}`);
  };

  this.create = function(location) {
    return $http.post('/locations', location);
  };

  this.update = function(userId, updateObj) {
    return $http.put(`/locations/${userId}`, updateObj);
  };

  this.addUser = function(locationId, userId) {
    return $http.put(`/locations/${locationId}/addUser/${userId}`);
  }

});
