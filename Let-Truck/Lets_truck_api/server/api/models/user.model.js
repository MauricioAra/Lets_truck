var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lets_truck');
  var UserSchema = new mongoose.Schema({
    identification : {type : String , unique : true},
    name: String,
    lastName: String,
    phone : String,
    direction : String ,
    distrit : String,
    email : String,
    role : String,
    password : String
  });
  module.exports = mongoose.model('User', UserSchema);
  //module.exports = mongoose.model('User', AuthSchema);
