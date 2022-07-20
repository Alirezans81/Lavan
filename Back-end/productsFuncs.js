// imports
const mongoose = require('mongoose');
// end of imports

// inits
let products = require("./products.json");
// end of inits

// key
const privateKey = process.env.LAVAN_KEY;
// end of key

// main functions
function getProducts() {
  return products;
}

function getProductById(productId) {
  return products.productId;
}

function addProduct(key, product) {
  if (key === privateKey) {

  } else return undefined;
}

function removeProduct(key, productId) {
  if (key === privateKey) {
    
  } else return undefined;
}
// end of main functions

module.exports = {getProducts, getProductById, addProduct, removeProduct};