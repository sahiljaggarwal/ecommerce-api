const Product = require('../../../models/Product')
const Review = require('../../../models/Review')

async function getReviewList(req, res){
    try {
        const productId = req.params.productId
        const product = await Product.findById(productId).populate('reviews');
        if(!product){
            return res.status(404).json({message: "Product Not found"})
        }
        const review = await Review.find({productId: productId})
        if(!review){
            return res.status(404).json({message: "Review Not Found"})
        }
        return res.status(200).json({success: true, review})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success: false})
    }
}

module.exports = getReviewList