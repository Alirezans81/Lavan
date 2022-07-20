

// intits
const express = require('express');
const app = express();
// end of intits

// express add-ons
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
// end of express add-ons

// routes

// end of routes

