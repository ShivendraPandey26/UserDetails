import mongoose from "mongoose";

// Function to connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error:", error);
  }
};

export default connectToDatabase;
