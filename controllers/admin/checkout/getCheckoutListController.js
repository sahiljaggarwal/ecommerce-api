const Checkout = require('../../../models/Checkout')

async function getCheckoutList(req, res){
    try {
        const userId = req.user.id
        const itemCheckout = await Checkout.find({userId:userId})
        if(!itemCheckout){
            return res.status(404).json({message:"Items Not Found"})
        }
        return res.status(200).json({success:true, itemCheckout})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success:false})
    }
}

module.exports = getCheckoutList