const Checkout = require('../../../models/Checkout')
const Cart = require('../../../models/Cart')

async function checkout(req, res){
    try {
        const userId = req.user.id
        const userCart = await Cart.findOne({userId}).populate('items.productId')
        if(!userCart){
            return res.status(404).json({message: "Items Not Found"})
        }

        let totalPrice = 0
        userCart.items.forEach(item => {totalPrice += item.productId.price * item.quantity})

        const newCheckout = await new Checkout({userId: userId, items: userCart.items, totalPrice: totalPrice})

        const savedCheckout = await newCheckout.save()

        userCart.items = []
        await userCart.save()

        return res.status(201).json({success: true, message: "Checkout Successfully", savedCheckout})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success:false})
    }
}

module.exports = checkout