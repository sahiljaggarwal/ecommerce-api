const Product = require('../../../models/Product')

async function updateProduct(req, res){
    try {
        const productId = req.params.productId
        const productUpdated = req.body
        const product = await Product.findByIdAndUpdate(productId, productUpdated,{new: true})
        if(!product){
            return res.status(404).json({message: "Product Not Found"})
        }
        return res.status(201).json({message: "Product updated Successfully", success: true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success: false})
    }
}

module.exports = updateProduct