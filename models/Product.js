const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    },
    rating: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['smartphone', 'food', 'clothes', 'shoes'],
        required: true
    }
}, {timestamps: true})

const Product = mongoose.model('Product', productSchema)

module.exports = Product