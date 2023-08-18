const express = require('express')
const passport = require('passport')
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes');
const connectDb = require('./db/connectDb');
require('dotenv').config();
const app = express()

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
    })
  );
app.use(passport.initialize());
app.use(express.json()) 

// routes
app.use(routes)

// Database Connection
connectDb()

// Server Connection
const port = process.env.PORT || 6000
app.listen(port, () =>{
    console.log(`server running on http://localhost:${port}`)
})