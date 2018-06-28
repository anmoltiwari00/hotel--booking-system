var mongoose = require('mongoose');

var HotelSchema = new mongoose.Schema({
  name: {type: String, required: true},
  place: {type: String, required: true},
  star: Number
});

module.exports = mongoose.model('Hotel', HotelSchema);
