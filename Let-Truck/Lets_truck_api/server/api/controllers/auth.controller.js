// Auth controller
var jwt    = require('jsonwebtoken');
var User = require('../models/user.model.js');
  // get the todos resource
  module.exports.authenticate = function(req, res){
    User.findOne({email:req.body.email, password:req.body.password}).then(function(user){
      var token = jwt.sign(user.password, 'ilovescotchyscotch', { expiresIn: '1h'});
      user.token = token;
      res.send(user);
    }).catch(function(err){
      console.log(err);
    })
  };
