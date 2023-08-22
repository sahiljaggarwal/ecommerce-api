const {addProduct, updateProduct, deleteProduct, getProductList, getProductListById, searchProduct} = require('./product')
const {addToCart, getCartList, deleteCartItem} = require('./cart')
const {addReview, deleteReview} = require('./review')

module.exports = {
    // Product
    addProduct,
    updateProduct,
    deleteProduct,
    getProductList,
    getProductListById,
    searchProduct,

    // Cart
    addToCart,
    deleteCartItem,
    getCartList,

    // review
    addReview,
    deleteReview
}