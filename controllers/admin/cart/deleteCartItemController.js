const Cart = require('../../../models/Cart')
const Product = require('../../../models/Product')
const User = require('../../../models/User')

async function deleteCartItem(req, res){
    try {
        const userId = req.user.id
        const productId = req.params.productId

        const user = await User.findById(userId)
        const product = await Product.findById(productId)
        const cart = await Cart.findOne({userId: userId})

        if(!user){
            return res.status(404).json({message: "User not Found"})
        }

        if(!product){
            return res.status(404).json({message: "Product not Found"})
        }

        if(!cart){
            return res.status(404).json({message: "Cart not Found"})
        }

        const updatedItems = cart.items.filter(item => item.productId.toString() !== productId)
        cart.items = updatedItems
        await cart.save()

        return res.status(200).json({message: "Cart Item Deleted Successfully", success: true})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success: false})
    }
}

module.exports = deleteCartItem