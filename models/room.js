var mongoose = require('mongoose');
var Hotel = require('./hotel');

var RoomSchema = new mongoose.Schema({
  room_no: {type: Number, required: true},
  max_occupancy: {type: Number, default: 2},
  booked: [{
    from: { type: Date, default: Date.now },
    to: { type: Date, default: Date.now }
  }],
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true
  }
});

module.exports = mongoose.model('Room', RoomSchema);
