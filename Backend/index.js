import express from "express";
import connectToDatabase from "./db/connection.js";
import { config } from "dotenv";
config();
import cors from "cors";
import router from "./routes/userDataRoute.js";
import { userRouter } from "./routes/userRoute.js";
import passport from "./Auth/LocalAuth.js";

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());
app.use(cors());

app.use(passport.initialize());
const localauth = passport.authenticate('local', {session: false}) ;

// Routes
app.use("/" ,router);
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
startServer();
