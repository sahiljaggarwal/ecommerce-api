const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const User = require('../models/User'); // Update the path

const secret_key = process.env.SECRET_KEY

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        // Find the user by email
        const user = await User.findOne({ email });

        // If no user found or password does not match
        if (!user || !bcrypt.compareSync(password, user.password)) {
          return done(null, false, { message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, secret_key, {
          expiresIn: '24h', // Token expiration time
        });

        return done(null, user, { token });
      } catch (error) {
        return done(error);
      }
    }
  )
);

module.exports = passport;
