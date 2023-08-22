const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')
const checkRole = require('../middlewares/checkRole')
const {admin} = require('../controllers/index')

/** Cart */

// add/update To Cart
router.post('/cart/add/:productId',  verifyToken,checkRole('user'),admin.addToCart)

// Cart List
router.get('/cart/all', verifyToken, checkRole('user'), admin.getCartList)

// Delete Cart Items
router.delete('/cart/delete/:productId', verifyToken, checkRole('user'), admin.deleteCartItem)

/** Review */

// add review
router.post('/review/add/:productId', verifyToken, checkRole('user'), admin.addReview)

// delete review 
router.delete('/review/delete/:reviewId', verifyToken, checkRole('user', admin.deleteReview))

module.exports = router