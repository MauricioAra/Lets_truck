var mongoose = require('mongoose');
  var ProvinceSchema = new mongoose.Schema({
    idProvincia: Number,
    nombre: String
  });
  module.exports = mongoose.model('Province', ProvinceSchema);
