const controller = require("../controller");
const Product = require("../../models/product");
const _ = require("lodash");

module.exports = new (class extends controller {
  async addProduct(req, res) {
    const product = new Product({
      imgSrc: req.body.imgSrc,
      title: req.body.title,
      desc: req.body.desc,
      colors: req.body.colors,
    });
    const result = await product.save();
    res.json({
      data: result,
      message: "ok",
    });
  }

  async updateProduct(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, {
      imgSrc: req.body.imgSrc,
      title: req.body.title,
      desc: req.body.desc,
      colors: req.body.colors,
    });

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
