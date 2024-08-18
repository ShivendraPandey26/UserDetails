import express from "express";
import connectToDatabase from "./db/connection.js";
import { configDotenv } from "dotenv";
configDotenv();
import router from "./routes/userDataRoute.js";

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Basic route
app.use("/", router);

app.listen(process.env.PORT || 3000, async (err) => {
  try {
    await connectToDatabase();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit process if connection fails
  }
  if (err) console.log(err);
  console.log(`Server is running on port ${process.env.PORT}`);
});
