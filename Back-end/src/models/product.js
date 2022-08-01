const mongoose = require("mongoose");

const countSchema = mongoose.Schema({
  purchased: { type: Boolean, default: false, required: true },
});

const sizeSchema = mongoose.Schema({
  size: { type: Number, required: true },
  count: { type: [countSchema], required: true, default: [] },
});

const colorSchema = mongoose.Schema({
  color_name: { type: String, required: true },
  sizes: { type: [sizeSchema], required: true, default: [] },
});

const productSchema = mongoose.Schema({
  imgSrc: {type: String, required: true},
  title: { type: String, required: true },
  desc: String,
  colors: { type: [colorSchema], required: true, default: [] },
});

module.exports = mongoose.model("Product", productSchema);
