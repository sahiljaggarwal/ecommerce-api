const dotenv = require( "dotenv");
dotenv.config()

const config = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 6000,
    MONGODB_URL: process.env.MONGODB,
    secretKey: process.env.SECRET_KEY,
    gmail: process.env.GMAIL,
    gmailPassword: process.env.GMAIL_PASSWORD
  };
module.exports =  config;