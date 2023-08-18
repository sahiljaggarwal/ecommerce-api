const addProduct = require('./addProductController')
const updateProduct = require('./updateProductController')
const deleteProduct = require('./deleteProductController')
const getProductList = require('./getProductListController')
const getProductListById = require('./getProductListByIdController')
const searchProduct = require('./searchProductController')

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getProductList,
    getProductListById,
    searchProduct
}