import React from 'react'

function Card({ user }) {

  // function for deleting cards
  const handleDelete = async (name) => {
    const response = await fetch(`http://localhost:8000/${name}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
  };



  return (
      {/* Card Content */}
      
  
  )
}

export default Card