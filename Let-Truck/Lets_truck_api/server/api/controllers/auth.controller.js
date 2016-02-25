// Auth controller
var User = require('../models/user.model.js');
  // get the todos resource
  module.exports.authenticate = function(req, res){
    User.findOne({email:req.body.email, password:req.body.password}).then(function(resp){
      res.send(resp);
    }).catch(function(err){
      errorHandler(err);
      response.status(500).send('shdbj');
    })
  };
