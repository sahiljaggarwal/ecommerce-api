const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    username: {type: String, unique: true},
    account: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

}, {timestamps: true})



userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next()
    }

    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(this.password, saltRounds)
        this.password = hashedPassword
        next()
    } catch(error){
        next(error)
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User