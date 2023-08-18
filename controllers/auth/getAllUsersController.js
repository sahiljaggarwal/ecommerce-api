const User = require('../../models/User')

async function getAllUsers(req, res){
    try{
        const users = await User.find()
        if(!users){
            return res.status(404).json({message: "User not found"})
        }
        return res.status(200).json({success: true, users})
    } catch(error){
        console.log(error)
        return res.status(500).json({error: "Internal Server Erro", success: false})
    }

}

module.exports = getAllUsers