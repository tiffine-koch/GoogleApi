'use strict';

var express = require('express');
var router = express.Router();
var moment = require('moment');

var Location = require('../models/location');
var User = require('../models/user');

router.get('/', function(req, res, next) {
  Location.find({}, function(err, locations) {
    if(err) return res.status(400).send(err);
    res.send(locations);
  });
});

router.get('/:id', function(req, res) {
  Location.findById(req.params.id)
  .populate('users')
  .exec(function(err, location) {
    if(err || !location) return res.status(400).send(err || "Location not found");
    res.send(location);
  })
})

router.post('/', function(req, res) {
  Location.create(req.body, function(err, location) {
    res.status(err ? 400 : 200).send(err || location);
  });
});

router.put('/:locationId/addUser/:userId', function(req, res) {
  Location.findById(req.params.locationId, function(err, lady) {
    if(err || !location) return res.status(400).send(err || "Location not found");
    User.findById(req.params.userId, function(err, cat) {
      if(err || !cat) return res.status(400).send(err || "User not found");
      location.users.push(req.params.userId);

      location.save(function(err, savedLocation) {
        res.status(err ? 400 : 200).send(err || savedLocation);
      });
    })
  })
})

router.delete('/:id', function(req, res) {
  Location.findById(req.params.id, function(err, location) {
    location.remove(function(err) {
      if(err) {
        res.status(400).send(err);
        return;
      }
      res.send();
    })
  })
})

module.exports = router;
