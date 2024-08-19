import userDetailsModel from "../models/userDetailsModel.js";

// this fuction will handle the create new user
export const handleCreateNewUser = async (req, res) => {
  try {
    const { name, email, age, address, message } = req.body;

    // Validate input data
    if (!name || !email || !age || !address || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new user in the database
    const userAdded = await userDetailsModel.create({
      name: name,
      email: email,
      age: age,
      address: address,
      message: message,
    });

    res.status(201).json(userAdded);
  } catch (error) {
    console.error("Error adding user:", error.message);
    res.status(400).json({ error: error.message });
  }
};

// this fuction is handled find all users
export const handleRetrieveAllUsers = async (req, res) => {
  try {
    const users = await userDetailsModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

//this fuction is handled find a user by name
export const handleRetrieveUsersByName = async (req, res) => {
  const { name } = req.params;
  try {
    const user = await userDetailsModel.findOne({ name: name });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// this fuction is handled Delete a user by name
export const handleDeleteUsersByName = async (req, res) => {
  const { name } = req.params;
  try {
    const user = await userDetailsModel.findOneAndDelete({ name });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

//this fuction is handled user updates
export const handleUpdateUser = async (req, res) => {
  const { name } = req.params;
  try {
    const updatedUser = await userDetailsModel.findOneAndUpdate(
      { name }, // Query to find user by name
      req.body, // Update with request body
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
