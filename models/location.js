'use strict';

var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
  name: String,
  image: String,
  bio: String,
  zip: Number,
  date: String,
  map: [String],
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  createdAt: { type: Date, default: Date.now }
});

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;
