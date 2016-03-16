// Distribution controller
var request = require('request');
var User = require('../models/user.model.js');
  // get the todos resource
  module.exports.getAll = function(req, res){
    User.find().then(function(resp) {
      res.codeMessage = 201;
      res.mesagge ="Successfully register!"
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
    })
  };
  //
  module.exports.create = function(req, res){
    User.create(req.body).then(function(resp){
      res.send(resp);
    }).catch(function(err){
      console.log(err);
    })
  };
  module.exports.getUser = function(req, res){
    User.find({_id : req.body.id}).then(function(resp){
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
