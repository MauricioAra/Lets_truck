var mongoose = require('mongoose');
  var TripSchema = new mongoose.Schema({
    directionOriginMap : String,
    exactDirectionOrigin: String,
    directionDestinationMap: String,
    exactDirectionDestination : String,
    description : String ,
    comment : String,
    dateTrip : String,
    state: String,
    img : String,
    idUser : String
  });
  module.exports = mongoose.model('Trip', TripSchema);
