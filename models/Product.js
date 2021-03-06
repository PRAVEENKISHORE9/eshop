var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  price: Number,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);