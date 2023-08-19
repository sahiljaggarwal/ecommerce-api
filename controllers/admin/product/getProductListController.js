const Product = require('../../../models/Product')

async function getProductList(req, res){
    try {
        const products = await Product.find()
        if(!products || products.length === 0){
            return res.status(404).json({message: "Product not found"})
        }
        return res.status(200).json({ success: true, products})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success: false})
    }
}

module.exports = getProductList