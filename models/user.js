var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: String,
  phone: {type: Number, required: true}
});

module.exports = mongoose.model('User', UserSchema);
