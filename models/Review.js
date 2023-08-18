const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    name: {
        type: String
    },
    review: {
        type: String,
        maxlength: 1000
    },
    rating: {
        type: String,
        enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }
})