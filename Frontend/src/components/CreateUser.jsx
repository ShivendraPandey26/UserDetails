import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
    message: "",
  });

  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success messages

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic validation: Check if all fields are filled
    for (const key in formData) {
      if (formData[key].trim() === "") {
        setError("All fields are required.");
        return;
      }
    }

    try {
      // Send form data to server
      const response = await fetch("http://localhost:8000/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle server errors
        setError(result.error || "Failed to submit form.");
        setSuccess("");
      } else {
        // Handle successful form submission
        setSuccess("Form submitted successfully.");
        setError("");
        setFormData({
          name: "",
          email: "",
          age: "",
          address: "",
          message: "",
        });
        setTimeout(() => navigate("/read"), 1000);
      }
    } catch (error) {
      // Handle network errors
      setError("Network error. Please try again later.");
      setSuccess("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[85vh]">
      <div className="max-w-lg mx-auto p-4 bg-gray-50 shadow-lg rounded-lg">
        <center>
          {/* Error and Success Messages */}
          {error && (
            <div
              className="flex flex-col bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700"
              role="alert"
            >
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 inline mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="font-medium">Danger alert!</span>
              </div>
              <p>{error}</p>
            </div>
          )}
          {success && (
            <div className="m-auto">
              <div className="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
                <div className="flex flex-row">
                  <div className="px-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 1792 1792"
                      fill="#44C997"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                    </svg>
                  </div>
                  <div className="ml-2 mr-6">
                    <span className="font-semibold">{success}</span>
                    <span className="block text-gray-500">
                      Great job! Your user details have been successfully
                      submitted.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </center>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          User Details Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Grid for two fields per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-1"
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
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Age Field */}
            <div>
              <label
                htmlFor="age"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Address Field */}
            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
