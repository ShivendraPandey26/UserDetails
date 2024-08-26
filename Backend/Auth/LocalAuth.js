import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import UserModel from "../models/UserModel.js";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      console.log("Received request", username, password);
      // find the user by username
      const user = await UserModel.findOne({ userName: username });
      if (!user) {
        return done(null, false, { message: "Invalid userName" });
      }
      // check if the password is correct
      const isPasswordMatch = user.password === password ? true : false;
      if (!isPasswordMatch) {
        return done(null, false, { message: "Invalid password" });
      }
      // if everything is ok, return the user
      return done(null, user);
    } catch (error) {
      return done(null, false, { message: error.message });
    }
  })
);

export default passport