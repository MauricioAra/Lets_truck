var mongoose = require('mongoose');
//'mongodb://localhost/lets_truck'
//'mongodb://root:root@ds015899.mlab.com:15899/lets_truck'
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
    password : String,
    image : String,
    token : String
  });
  module.exports = mongoose.model('User', UserSchema);
