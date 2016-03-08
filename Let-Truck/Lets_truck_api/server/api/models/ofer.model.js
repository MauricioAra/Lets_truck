var mongoose = require('mongoose');
  var OferSchema = new mongoose.Schema({
    amount : String,
    description : String,
    idTrip : String,
    idDriver : String
  });
  module.exports = mongoose.model('Offer', OferSchema);
