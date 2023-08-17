const mongoose = require('mongoose')
require('dotenv').config()

const mongodb = process.env.MONGODB 

async function connectDb(){
    try {
        await mongoose.connect(mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database is connected")
    } catch (error) {
        console.log(error, 'Database Connection Error')
        process.exit(1)
    }
}

module.exports = connectDb