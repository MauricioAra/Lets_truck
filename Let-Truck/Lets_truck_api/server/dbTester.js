var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lets_truck');


var UserSchema = new mongoose.Schema({
  identification : String,
  name: String,
  lastName: String
});

var User = mongoose.model('User', UserSchema);

User.create({
  identification : '115680803',
  name: 'Mauricio',
  lastName: 'Araica'
}).then(function(err, user) {
  console.log(err, user);
});
