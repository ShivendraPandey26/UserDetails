import React from "react";

function SearchedUser() {
  const user = {
    _id: "66c4d9570c62a795706ccfa0",
    name: "aviral",
    email: "aviral7@gmail.com",
    age: 5675,
    address: "gudhiyari",
    message: "5674hjhmhmghkiol,jhuiojkjg.frtfgtrfgrtfgtfgtgf",
    createdAt: "2024-08-20T17:58:47.692Z",
    updatedAt: "2024-08-20T17:58:47.692Z",
    __v: 0,
  };
  return (
    <div>
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4">
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
              onClick={() => handleEdit(user.name)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(user.name)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchedUser;
