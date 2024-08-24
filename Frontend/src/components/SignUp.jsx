import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const postForm = async () => {
    try {
      const response = await fetch("http://localhost:8000/users/user", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        // Parse and log the response to understand the error
        const errorData = await response.json();
        console.log("Error from server:", errorData);
      } else {
        // Handle successful response
        const data = await response.json(); // If you need the response data
        console.log("Form submitted successfully:", data);

        // Reset form data
        setFormData({
          userName: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error("Failed to submit form:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending data to a server
    console.log("Form Data Submitted:", formData);
    postForm();
  };

  return (
    <div className="flex justify-center items-center min-h-[85vh]">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="userName"
          >
            Username
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        >
          Signup
        </button>
      <div className="text-center text-gray-600 mt-5">
        Already have an account? <Link 
        className="font-bold underline hover:text-indigo-500"
        to={'/login'}>
        Login
        </Link>
      </div>
      </form>
    </div>
  );
};

export default SignupForm;
