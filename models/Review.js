const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    review: {
        type: String,
        maxlength: 1000,
        required: true
    },
    rating: {
        type: String,
        enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        required: true
    }
}, {timestamps: true})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review