// imports
const express = require("express");
const Product = require("../models/product");
const router = express.Router();
const { body, validationResult } = require("express-validator");
// end of imports

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json({
    data: products,
    message: "ok",
  });
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      data: null,
      message: "product not found",
    });
  }

  res.json({
    data: product,
    message: "ok",
  });
});

router.post(
  "/",
  [
    body("imgSrc", "imgSrc cant be empty").notEmpty(),
    body("imgSrc", "imgSrc must be URL").isURL(),
    body("title", "title cant be empty").notEmpty(),
    body("colors", "colors cant be empty").notEmpty(),
    body("colors", "colors must be array").isArray(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        data: null,
        errors: errors.array(),
        message: "validation error",
      });
    }

    let newProduct = new Product({
      imgSrc: req.params.imgSrc,
      title: req.params.title,
      desc: req.params.desc,
      colors: req.params.colors,
    });

    newProduct = await newProduct.save();

    res.json({
      data: newProduct,
      message: "ok",
    });
  }
);

router.put(
  "/:id",
  [
    body("imgSrc", "imgSrc cant be empty").notEmpty(),
    body("imgSrc", "imgSrc must be URL").isURL(),
    body("title", "title cant be empty").notEmpty(),
    body("colors", "colors cant be empty").notEmpty(),
    body("colors", "colors must be array").isArray(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        data: null,
        errors: errors.array(),
        message: "validation error",
      });
    }

    const product = await Product.findByIdAndUpdate(req.params.id, {
      imgSrc: req.params.imgSrc,
      title: req.params.title,
      desc: req.params.desc,
      colors: req.params.colors,
    }, {new: true});

    if (!product) {
      return res.status(404).json({
        data: null,
        message: "product not found",
      });
    }
  
    res.json({
      data: product,
      message: "ok",
    });
  }
);

router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);
  if (!product) {
    return res.status(404).json({
      data: null,
      message: "product not found",
    });
  }

  res.json({
    data: product,
    message: "ok",
  });
});

module.exports = router;
