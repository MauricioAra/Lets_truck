// Trip controller
var request = require('request');
var Truck = require('../models/truck.model.js');

  //
  module.exports.create = function(req, res){
    Truck.create(req.body).then(function(resp){
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
    })
  };
  //
  module.exports.getMyTrucks = function(req, res){
    Truck.find({idDriver : req.body.id}).then(function(resp) {
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
    })
  };
  /*module.exports.deleteTodo = function(req, res){
    Todo.findByIdAndRemove(req.body.id).then(function(resp){
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
    })
  };*/
