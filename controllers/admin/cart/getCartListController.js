const Cart = require('../../../models/Cart')
const User = require('../../../models/User')
const Product = require('../../../models/Product')

async function getCartList(req, res){
    try {
        const userId = req.user.id
        const cart = await Cart.find({userId: userId})
        if(!userId){
            return res.status(404).json({message: "user not found"})
        }
        if(!cart){
            return res.status(404).json({message: 'Cart not found'})
        }

        return res.status(200).json({success: true, cart})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success:false})
    }
}

module.exports = getCartList