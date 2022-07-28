const mongoose = require('mongoose');

const countSchema = mongoose.Schema({
  purchased: {type: Boolean, default: false, required: true}
});

const sizeSchema = mongoose.Schema({
  size: {type: Number, required: true},
  count: {type: [countSchema], required: true, default: []}
});

const colorSchema = mongoose.Schema({
  color_name: {type: String, required: true},
  sizes: {type: [sizeSchema], required: true, default: []}
});

const productSchema = mongoose.Schema({
  imgSrc: {type: String, required: true},
  colors: {type: [colorSchema], required: true, default: []}
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;