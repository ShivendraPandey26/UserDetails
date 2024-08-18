// src/components/UserCard.jsx
import React from 'react';
import Card from './card';


const UserCard = () => {
  // Dummy data array (empty array simulates no data)
  const users = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  return (
    <div className="p-4">
      {users.length === 0 ? (
        <p className="text-center text-gray-600 text-xl p-10">No users available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Repeat the Card component */}
          {users.map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserCard;  
