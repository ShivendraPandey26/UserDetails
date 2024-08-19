import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const UserCard = () => {
  // State to manage users and error messages
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users from the server
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      if (data.errors) {
        setError(data.errors);
        setUsers([]);
      } else {
        setUsers(data);
        setError("");
      }
    } catch (error) {
      console.error("Failed to fetch users:", error.message);
      setError(error.message);
      setUsers([]);
    }
  };

  // Handle user deletion
  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8000/${userId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error);
      } else {
        const data = await response.json();
        console.log("User Deleted Successfully:", data.name);
        setError(`User ${userId} deleted successfully.`);
        setTimeout(() => {
          setError("");
          fetchUsers();
        }, 1000);
      }
    } catch (error) {
      console.error("Failed to delete user:", error.message);
      setError(error.message);
    }
  };

  // Handle edit user
  const handleEdit = (userId) => {
    navigate(`/edit/${userId}`);
  };

  return (
    <div className="p-4">
      {/* Error Message */}
      {error && (
        <div
          className="flex flex-col bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700"
          role="alert"
        >
          <div className="flex items-center">
            <svg
              className="w-5 h-5 inline mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-medium">Error:</span>
          </div>
          <p>{error}</p>
        </div>
      )}

      {/* No Users Message */}
      {users.length === 0 && !error && (
        <p className="text-center text-gray-600 text-xl p-10">
          No users available
        </p>
      )}

      {/* User Cards */}
      <h1 className="text-center text-3xl underline underline-offset-4 font-semibold mb-5">
        All Users
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user._id}
            className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4"
          >
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{user.name}</h2>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Age:</strong> {user.age}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> {user.address}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Message:</strong> {user.message}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(user._id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
