const mongoose = require('mongoose');
const Product = require('./product');

const purchasedSchema = mongoose.Schema({
  product_id: {type: mongoose.Schema.Types.ObjectId, ref:'Product', required: true},
  color: {type: String, required: true},
  size: {type: String, required: true}
});

const userSchema = mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},
  phone_number: {type: String, required: true},
  cart_products : {type: [purchasedSchema], required: true, default: []},
  purchased_products : {type: [purchasedSchema], required: true, default: []},
  admin: {type: Boolean, required: true, default: false}
})

const User = mongoose.model("User", userSchema);

module.exports = User;