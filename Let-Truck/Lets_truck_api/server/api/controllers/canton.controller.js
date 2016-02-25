// Distribution controller
var request = require('request');
var Canton = require('../models/canton.model.js');
  // get the todos resource
  module.exports.getAll = function(req, res){
    Canton.find().then(function(resp) {
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
    })
  };
  //
  /*module.exports.create = function(req, res){
    User.create(req.body).then(function(resp){
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
    })
  };
  //
  /*module.exports.deleteTodo = function(req, res){
    Todo.findByIdAndRemove(req.body.id).then(function(resp){
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
    })
  };*/
