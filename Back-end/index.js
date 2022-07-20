// imports
const {getProducts, getProductById, addProduct, removeProduct} = require('./productsFuncs');
// end of imports

// intits
const express = require('express');
const app = express();
// end of intits

// express add-ons
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
// end of express add-ons

// proudct routes
app.get('/products', (req, res)=>{
  res.send(getProducts());
})

app.get('/products/:id', (req, res)=>{
  res.send(getProductById());
})

app.get('/products/add', (req, res)=>{
  res.send(addProduct(req.body));
})

app.get('/products/remove', (req, res)=>{
  res.send(removeProduct(req.body));
})
// end of product routes

