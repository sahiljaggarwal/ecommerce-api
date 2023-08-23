const {addProduct, updateProduct, deleteProduct, getProductList, getProductListById, searchProduct} = require('./product')
const {addToCart, getCartList, deleteCartItem} = require('./cart')
const {addReview, deleteReview, getReviewList} = require('./review')
const {checkout, getCheckoutList} = require('./checkout')

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
    deleteReview,
    getReviewList,

    // Checkout
    checkout,
    getCheckoutList
}