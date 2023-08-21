const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')
const checkRole = require('../middlewares/checkRole')
const {admin} = require('../controllers/index')

// add To Cart
router.post('/cart/add/:productId',  verifyToken,checkRole('user'),admin.addToCart)

module.exports = router