const {addProduct, updateProduct, deleteProduct, getProductList, getProductListById, searchProduct} = require('./product')
const {addToCart} = require('./cart')

module.exports = {
    // Product
    addProduct,
    updateProduct,
    deleteProduct,
    getProductList,
    getProductListById,
    searchProduct,

    // Cart
    addToCart
}