import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Navigate
    const navigate = useNavigate();

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle keydown event for search
const handleKeyDown = async (event) => {
  if (event.key === "Enter") {
    const searchText = event.target.value;

    // Check if the search text is empty
    if (searchText.trim() === "") {
      alert("Please enter a value to search.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/${searchText}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Search results:", data);
      navigate('/read')
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }
};

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="text-white text-2xl font-bold">User Details</div>
        </Link>

        {/* Search Bar for larger screens */}
        <div className="hidden md:flex flex-1 mx-4">
          <input
            type="search"
            placeholder="Search..."
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Create User
          </Link>
          <Link to="/read" className="text-white hover:text-gray-300">
            All Users
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-2 mt-2 px-4">
          <input
            type="search"
            placeholder="Search..."
            className="w-full p-2 mb-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={handleKeyDown}
          />
          <Link
            to="/"
            className="block text-white px-4 py-2 hover:bg-blue-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Create User
          </Link>
          <Link
            to="/read"
            className="block text-white px-4 py-2 hover:bg-blue-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            All Users
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
