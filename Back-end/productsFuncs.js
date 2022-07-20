// inits
let products = require("./products.json");
// end of inits

// key
const key = process.env.LAVAN_KEY;
// end of key

// main functions
function getProducts(key, product) {
  return products;
}

function getProductById(key, productId) {
  return products.productId;
}

function addProduct(key, product) {
  // creating product id
  let randomNum = Math.floor(Math.random() * 10000);
  while (!products.randomNum) {
    randomNum = Math.floor(Math.random() * 10000);
  }
  const productId = randomNum;
  // end of creating product id
}

function removeProduct(key, product) {
  
}
// end of main functions

module.exports = {getProducts, getProductById, addProduct, removeProduct};