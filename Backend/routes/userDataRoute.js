import { Router } from "express";
import {
  handleCreateNewUser,
  handleRetrieveAllUsers,
  handleRetrieveUsersByName,
  handleDeleteUsersByName,
  handleUpdateUser,
} from "../Controllers/usersDetails.js";

const router = Router();

// Route to handle user creation and retrieval of all users
router
  .route("/")
  // Create a new user
  .post(handleCreateNewUser)
  // Retrieve all users
  .get(handleRetrieveAllUsers);

// Route to handle operations for a specific user by name
router
  .route("/:name")
  // Retrieve a user by name
  .get(handleRetrieveUsersByName)
  // Delete a user by name
  .delete(handleDeleteUsersByName);

// Route to handle user updates
router.patch("/edit/:name", handleUpdateUser);

export default router;
