var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose'),
    User = require('../models/user.model.js');

    passport.use(new LocalStrategy({
      username: 'email'
    },
    function(username, password,done){
      User.findOne({email:username},function(err, user){
        if(err){
          return done(err);
        }
        if(!user){
          return done(null, false,{
            message : 'incorrect email'
          });
        }
        if(!User.validPassword(password)){
          return done(null, false,{
            message:'incorrectPassword'
          });
        }
        return done(null, user)
      })
    }
  ));
