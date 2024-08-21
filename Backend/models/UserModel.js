import mongoose from "mongoose";

// create a Schema for user
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create a model for User
const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;
