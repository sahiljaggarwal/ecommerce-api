const Cart = require('../../../models/Cart')
const Product = require('../../../models/Product')
const User = require('../../../models/User')

async function addToCart(req, res){
    try {
        const userId = req.user.id
        const productId = req.params.productId
        const quantity = req.body.quantity
        const user = await User.findById(userId)
        const product = await Product.findById(productId)

        if(!user){
            return res.status(404).json({message: "User not Found"})
        }

        if(!product){
            return res.status(404).json({message: "Product not Found"})
        }

        let cart = await Cart.findOne({userId})
        if(!cart){
            cart = new Cart({
                userId, 
                items: [{productId, quantity}]
            })
        } else {
            const existingItem = cart.items.find(item => item.productId.toString() === productId)
            if(existingItem){
                existingItem.quantity += quantity
            } else {
                cart.items.push({productId, quantity})
            }
        }
        await cart.save()
        return res.status(201).json({message: "Product Cart Me Successfully Add Ho Chuka hai", success:true, cart})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success: false})
    }
}

module.exports = addToCart