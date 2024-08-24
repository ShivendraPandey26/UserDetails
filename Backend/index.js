import express from "express";
import connectToDatabase from "./db/connection.js";
import { config } from "dotenv";
config();
import cors from "cors";
import router from "./routes/userDataRoute.js";
import { userRouter } from "./routes/userRoute.js";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import UserModel from "./models/UserModel.js";

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
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
      const isPasswordMatch = (user.password) === password ? true : false;
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

const localauth = passport.authenticate('local', {session: false}) ;
// Routes
app.use("/",localauth ,router);
app.use("/users/user", userRouter);

const startServer = async () => {
  try {
    await connectToDatabase();
    console.log("Successfully connected to MongoDB");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message || error);
    process.exit(1);
  }
};

// Initialize the server
startServer();
