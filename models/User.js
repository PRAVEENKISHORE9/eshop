var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: false,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: false,
    trim: true
  },
  password: {
    type: String,
    required: false,
  }
});
module.exports = User = mongoose.model('User', UserSchema);
// var User = mongoose.model('User', UserSchema);
// module.exports = User;