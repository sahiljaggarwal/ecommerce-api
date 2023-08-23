const User = require('../../models/User')

async function signUp(req, res){
    try {
        const {email, password, account, username} = req.body
        if (account === 'admin') {
            const existingAdmin = await User.findOne({ account: 'admin' })
            if (existingAdmin) {
                return res.status(409).json({ message: 'Admin already exists' })
            }
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({message: "User already existed"})
        }
        const user = await new User({email, password, account, username})
        await user.save()
        return res.status(201).json({message:"User Account Created Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success: false})
    }
}

module.exports = signUp