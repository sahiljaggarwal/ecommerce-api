const Product = require('../../../models/Product')

async function deleteProduct(req, res){
    try {
        const productId = req.params.productId
        const product = await Product.findByIdAndRemove(productId)
        if(!product){
            return res.status(404).json({message: "Product Not Found"})
        }
        return res.status(201).json({message: "Product Delete Successfully", success: true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success: false})
    }
}

module.exports = deleteProduct