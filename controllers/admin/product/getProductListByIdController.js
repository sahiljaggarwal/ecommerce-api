const Product = require('../../../models/Product')

async function getProductListById(req, res){
    try {
        const productId = req.params.productId
        const product = await Product.findById(productId)
        if(!product){
            return res.status(404).json({message: "Product not found"})
        }
        return res.status(200).json({ success: true, product})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success: false})
    }
}

module.exports = getProductListById