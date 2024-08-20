import express from "express";
import connectToDatabase from "./db/connection.js";
import { configDotenv } from "dotenv";
configDotenv();
import router from "./routes/userDataRoute.js";
import cors from 'cors';

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());
app.use(cors());

// Basic route
app.use("/", router);

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
