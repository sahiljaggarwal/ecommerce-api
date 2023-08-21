const express = require('express')
const router = express.Router()
const multer = require('multer')
const verifyToken = require('../middlewares/verifyToken')
const checkRole = require('../middlewares/checkRole')
const {admin} = require('../controllers/index')

// Multer Configuration
const storage = multer.diskStorage({});
const upload = multer({ storage });

/*** Product Routes */

// add product
router.post('/product/add', verifyToken, upload.single('image'), checkRole('admin'),admin.addProduct)

// update product
router.put('/product/u/:productId', verifyToken,upload.single('image'), checkRole('admin'),admin.updateProduct)

// delete product
router.delete('/product/d/:productId', verifyToken, checkRole('admin'),admin.deleteProduct)

// get product by id
router.get('/product/list/:productId', verifyToken, checkRole('admin'),admin.getProductListById)

// get all products
router.get('/product/all/', verifyToken, checkRole('admin'),admin.getProductList)

// search functionality
router.get('/search', verifyToken, checkRole('admin'),admin.searchProduct)

/*** Cart Routes */

// add to cart 
// router.post('/cart/add')

module.exports = router