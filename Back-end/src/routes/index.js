const express = require('express');
const router = express.Router();
const authRouter = require('./auth')
const userRouter = require('./user')
const adminRouter = require('./admin')
const productRouter = require('./product')
const updateProductsRouter = require('./updateProducts')
const {isLoggined, isAdmin} = require('../middlewares/auth');
const error = require('../middlewares/error');

router.use('/auth', authRouter);

router.use('/user', isLoggined, userRouter);
router.use('/admin', isLoggined, isAdmin, adminRouter);
router.use('/products', productRouter);
router.use('/updateProducts', isLoggined, isAdmin, updateProductsRouter);

router.use(error);

module.exports = router;