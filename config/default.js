const dotenv = require( "dotenv");
dotenv.config()

const config = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 6000,
    MONGODB_URL: process.env.MONGODB,
    secretKey: process.env.SECRET_KEY,
    gmail: process.env.GMAIL,
    gmailPassword: process.env.GMAIL_PASSWORD,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    cloud_name: process.env.cloud_name
  };
module.exports =  config;