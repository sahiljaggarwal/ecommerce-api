const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')
const checkRole = require('../middlewares/checkRole')
const {admin} = require('../controllers/index')

router.post('/product/add', verifyToken, checkRole('admin'),admin.addProduct)
router.put('/product/:productId', verifyToken, checkRole('admin'),admin.updateProduct)
router.delete('/product/:productId', verifyToken, checkRole('admin'),admin.deleteProduct)
router.get('/product/:productId', verifyToken, checkRole('admin'),admin.getProductListById)
router.get('/product/all', verifyToken, checkRole('admin'),admin.getProductList)
router.get('/search', verifyToken, checkRole('admin'),admin.searchProduct)



module.exports = router