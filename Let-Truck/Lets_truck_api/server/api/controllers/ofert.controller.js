// Trip controller
var request = require('request');
var Ofert = require('../models/ofer.model.js');
  // get the todos resource
  module.exports.getOfersByTrip = function(req, res){
    Ofert.find({idTrip : req.body.id}).then(function(resp) {
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
    })
  };
  //
  /*module.exports.create = function(req, res){
    Trip.create(req.body).then(function(resp){
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
    })
  };
  //
  module.exports.getMyTrips = function(req, res){
    Trip.find({idUser:req.body.id}).then(function(resp) {
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
    })
  };
  //
  module.exports.getTrip = function(req, res){
    Trip.find({_id:req.body.id}).then(function(resp) {
      res.codeMessage = 201;
      res.mesagge ="Successfully get!"
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
    })
  };
  module.exports.deleteTodo = function(req, res){
    Todo.findByIdAndRemove(req.body.id).then(function(resp){
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
    })
  };*/
