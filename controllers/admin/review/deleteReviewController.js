const Review = require('../../../models/Review')
const User = require('../../../models/User')
const Product = require('../../../models/Product')

async function deleteReview(req, res){
    try {
        const userId = req.user.id
        const reviewId = req.params.reviewId
        const review = await Review.findById(reviewId);

        if (!review) {
            return res.status(404).json({ message: 'Review not found' })
        }

        if (review.userId.toString() !== userId) {
            return res.status(403).json({ message: 'Unauthorized to delete this review' })
        }

        const productId = review.productId

        await review.remove()

        await Product.updateOne(
            { _id: productId },
            { $pull: { reviews: reviewId } }
        )

        return res.status(200).json({success:true, message:"Review Delete Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server Error", success: false})
    }
}

module.exports = deleteReview