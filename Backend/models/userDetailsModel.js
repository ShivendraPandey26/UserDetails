import mongoose from "mongoose";

// Create Schema
const userDetailsSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  age: {
    type: "number",
    required: true,
  },
  address: {
    type: "string",
    required: true,
    minlength: 10,
    maxlength: 200,
  },
  message: {
    type: "string",
    default: "",
    maxlength: 200,
  },
},
  { timestamps: true }
);

// Create Model
const userDetailsModel = new mongoose.model(
  "userDetailsModel",
  userDetailsSchema
);

export default userDetailsModel;
