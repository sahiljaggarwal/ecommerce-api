const Product = require('../../../models/Product')
const User = require('../../../models/User')
const Review = require('../../../models/Review')

async function addReview(req, res){
    try {
        const userId = req.user.id
        const productId = req.params.productId 
        const {review, rating} = req.body

        const user = await User.findById(userId)
        const product = await Product.findById(productId)        

        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        if(!product){
            return res.status(404).json({message: "Product not found"})
        }
        const userReview = await new Review({
            review, rating, userId: userId, productId: productId
        })
        await userReview.save()

        return res.status(201).json({success:true, message: "user review add successfully", userReview})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success:false})
    }
}

module.exports = addReview