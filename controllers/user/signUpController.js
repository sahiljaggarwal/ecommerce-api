const User = require('../../models/User')

async function signUp(req, res){
    try {
        const {email, password, account} = req.body
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({message: "User already existed"})
        }
        const user = await new User({email, password, account})
        await user.save()
        return res.status(201).json({message:"User Account Created Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success: false})
    }
}

module.exports = signUp