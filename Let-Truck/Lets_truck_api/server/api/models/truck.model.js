var mongoose = require('mongoose');
  var TruckSchema = new mongoose.Schema({
    brand : String,
    model: String,
    year: String,
    licensePlate : String,
    tonnage : String ,
    comment : String,
    ramp : String,
    refrigerated: String,
    extras : String,
    idDriver : String,
    image : String,
    state : String
  });
  module.exports = mongoose.model('Truck', TruckSchema);
