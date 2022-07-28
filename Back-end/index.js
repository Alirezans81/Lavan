// imports
const express = require('express');
const mongoose = require('mongoose');
// end of imports

// intits
const app = express();

const homeRouter = require('./routes/home');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
// end of intits

// express add-ons
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
// end of express add-ons

// connecting to the db
mongoose.connect("mongodb://localhost:27017/lavan")
.then(()=>console.log('connected to mongodb.'))
.catch(()=>console.log('could not connect to mongodb!'));
// end of connecting to the db

// routes
app.use('/', homeRouter);

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
// end of routes

