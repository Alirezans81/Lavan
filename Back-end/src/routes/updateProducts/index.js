const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post(
  "/",
  controller.addProduct
);
router.put(
  "/:id",
  controller.updateProduct
);

module.exports = router;
