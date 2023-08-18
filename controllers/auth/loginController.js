const passport = require('../../middlewares/passport-config'); // Update the path

const login = async (req, res, next) => {
  try {
    passport.authenticate('local', async (err, user, info) => {
      if (err) {
        throw err;
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }

      // Log in the user and send the JWT token in response
      req.logIn(user, async (err) => {
        if (err) {
          throw err;
        }
        return res.status(200).json({message: "Login Successfully",success:true, token: info.token });
      });
    })(req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = login
