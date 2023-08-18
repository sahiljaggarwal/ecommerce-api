const Product = require('../../../models/Product')

async function addProduct(req, res){
    try {
        const {productName, price, description, reviews, rating, image, category} = req.body
        const product = await new Product({
            productName, price, description, reviews, rating, image, category
        })
        await product.save()
        return res.status(201).json({message: "Product Added Successfully", success: true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success: false})
    }
}

module.exports = addProduct