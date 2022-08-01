const controller = require("../controller");
const Product = require("../../models/product");
const _ = require("lodash");

module.exports = new (class extends controller {
  async getProducts(req, res) {
    const products = await Product.find();
    res.json({
      data: products,
      message: "ok",
    });
  }

  async getProductById(req, res) {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return this.response({
        res,
        code: 404,
        message: 'product not found'
      });
    }
    res.json({
      data: product,
      message: "ok",
    });
  }
})();
