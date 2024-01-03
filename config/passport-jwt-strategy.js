const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const Doctor = require("../model/doctorModel");

// Passport Authentiucation
let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "malware",
};

passport.use(
  new JWTStrategy(opts, async function (jwt_payload, done) {

    // Finding Doctor

    try {
      const user = await Doctor.findeById(jwt_payload._id);

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      console.log("Error in finding doctor from JWT");
      return done(err, false);
    }
  })
);

module.exports = passport;
