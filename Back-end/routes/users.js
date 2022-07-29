// imports
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
// end of imports

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json({
    data: users,
    message: "ok",
  });
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({
      data: null,
      message: "user not found",
    });
  }

  res.json({
    data: user,
    message: "ok",
  });
});

router.post(
  "/",
  [
    body("first_name", "first_name cant be empty").notEmpty(),
    body("last_name", "last_name cant be empty").notEmpty(),
    body("email", "email cant be empty").notEmpty(),
    body("email", "email is not valid").isEmail(),
    body("phone_number", "phone_number cant be empty").notEmpty(),
    body("phone_number", "phone_number is not valid").isMobilePhone(),
    body("cart_products", "cart_products must be array").isArray(),
    body("purchased_products", "purchased_products must be array").isArray(),
    body("admin", "admin must be array").isBoolean(),
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

    let newUser = new User({
      first_name: req.params.first_name,
      last_name: req.params.last_name,
      email: req.params.email,
      phone_number: req.params.phone_number,
      cart_products: req.params.cart_products,
      purchased_products: req.params.purchased_products,
      admin: req.params.admin,
    });

    newUser = await newUser.save();

    res.json({
      data: newUser,
      message: "ok",
    });
  }
);

router.put(
  "/:id",
  [
    body("first_name", "first_name cant be empty").notEmpty(),
    body("last_name", "last_name cant be empty").notEmpty(),
    body("email", "email cant be empty").notEmpty(),
    body("email", "email is not valid").isEmail(),
    body("phone_number", "phone_number cant be empty").notEmpty(),
    body("phone_number", "phone_number is not valid").isMobilePhone(),
    body("cart_products", "cart_products must be array").isArray(),
    body("purchased_products", "purchased_products must be array").isArray(),
    body("admin", "admin must be array").isBoolean(),
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

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        first_name: req.params.first_name,
        last_name: req.params.last_name,
        email: req.params.email,
        phone_number: req.params.phone_number,
        cart_products: req.params.cart_products,
        purchased_products: req.params.purchased_products,
        admin: req.params.admin,
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        data: null,
        message: "user not found",
      });
    }

    res.json({
      data: user,
      message: "ok",
    });
  }
);

router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user) {
    return res.status(404).json({
      data: null,
      message: "user not found",
    });
  }

  res.json({
    data: user,
    message: "ok",
  });
});

module.exports = router;
