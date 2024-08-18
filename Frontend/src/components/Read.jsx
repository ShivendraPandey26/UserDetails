// src/components/UserCard.jsx
import React from 'react';
import Card from './card';
const UserCard = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Repeat the Card component */}
        {[...Array(20)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default UserCard;
