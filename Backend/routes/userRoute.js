import { Router } from "express";
import UserModel from "../models/UserModel.js";

export const userRouter = Router();

// Route to create a new user
userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    if (users.length === 0) {
      return res.status(404).json({ error: "No users found" });
    }
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});



userRouter.post("/", async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newUser = await UserModel.create({ userName, email, password });
    res.status(201).json(newUser);
    console.log(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Route to get a user by ID
userRouter.get( '/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById({_id: id});
    if (!user) {
      // If no user is found, log the ID for debugging
      console.log(`User not found with ID: ${id}`);
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});
