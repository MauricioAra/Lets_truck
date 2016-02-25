var mongoose = require('mongoose');
  var CantonSchema = new mongoose.Schema({
    idCanton: Number,
    nombre: String,
    Provincia_idProvincia: Number 
  });
  module.exports = mongoose.model('Canton', CantonSchema);
