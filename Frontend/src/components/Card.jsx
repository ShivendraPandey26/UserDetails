import React from 'react'

function Card() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4">
      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">John Doe</h2>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> john.doe@example.com
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Age:</strong> 40
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Address:</strong> 123 Main St, Anytown
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Message:</strong> Hello world!
        </p>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Edit
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card