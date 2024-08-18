import express from "express";
import { configDotenv } from "dotenv";
import connectToDatabase from "./db/connection.js";

configDotenv()
const app = express();

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT || 3000, async () => {
  try {
    await connectToDatabase();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit process if connection fails
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});
