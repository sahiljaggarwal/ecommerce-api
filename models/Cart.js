const mongoose = require('mongoose')
const User = require('../models/User')
const Product = require('../models/Product')

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart