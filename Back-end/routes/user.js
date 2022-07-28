// imports
const express = require("express");
// end of imports

// intits
const router = express.Router();
// end of intits

app.get("/addToCart/:productId", (req, res) => {});

app.get("/removeFromCart/:productId", (req, res) => {});

app.get("/buy/:prdouctId", (req, res) => {});

module.exports = router;