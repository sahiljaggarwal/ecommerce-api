const jwt = require('jsonwebtoken')
// require('dotenv').config()
const config = require('../config/default')

// middleware function to verify JWT token
const verifyToken = (req, res, next) => {
    const tokenHeader = req.headers.authorization

    if(!tokenHeader){
        return res.status(401).json({message: "Token Not Provided"})
    }

    const tokenParts = tokenHeader.split(' ')
    if(tokenParts.length !==2 || tokenParts[0] !== 'Bearer'){
        return res.status(401).json({message: "Invalid token format"})
    }

    const token = tokenParts[1]
    // const secret_key = process.env.SECRET_KEY
    const secret_key = config.secretKey

    jwt.verify(token, secret_key, (err, decoded)=> {
        if(err){
            return res.status(401).json({message: 'Token verification failed'})
        }
        req.user= decoded
        next()
    })
}
module.exports = verifyToken