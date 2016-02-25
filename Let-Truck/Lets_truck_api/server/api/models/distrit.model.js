var mongoose = require('mongoose');
  var DistritSchema = new mongoose.Schema({
    idDistrito: Number,
    nombre: String,
    Canton_idCanton: Number
  });
  module.exports = mongoose.model('Distrit', DistritSchema);
