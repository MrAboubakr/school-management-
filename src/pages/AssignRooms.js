import React, { useState } from 'react';
import api from '../services/api';

const AssignRooms = () => {
  const [roomName, setRoomName] = useState('');

  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
  };

  const handleAssignRoom = async () => {
    if (roomName) {
      try {
        await api.assignRoomToAll(roomName);
        alert(`Room ${roomName} assigned successfully!`);
      } catch (error) {
        console.error('Error assigning room:', error);
  
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Server responded with:', error.response.data);
          console.error('Status code:', error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received. Is the server running?');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up the request:', error.message);
        }
  
        alert('Error assigning room. Please try again.');
      }
    } else {
      alert('Please enter a room name.');
    }
  };
  

  return (
    <div>
      <h2>Assign Rooms</h2>
      <label>Enter Room Name:</label>
      <input type="text" value={roomName} onChange={handleRoomNameChange} />
      <button onClick={handleAssignRoom}>select Room</button>
    </div>
  );
};

export default AssignRooms;
