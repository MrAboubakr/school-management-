import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import api from '../services/api';

const UploadStudents = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [roomName, setRoomName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadAndAssignRoom = async () => {
    if (roomName && selectedFile) {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('roomName', roomName);

        await api.uploadStudentsAndRoomName(formData);
        alert(`File uploaded and students assigned to room successfully!`);
      } catch (error) {
        console.error('Error uploading file and assigning room:', error);
        alert('Error uploading file and assigning room. Please try again.');
      }
    } else {
      alert('Please enter a room name and upload a valid file.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Upload Students</h2>
      <div className="mb-3">
        <label className="form-label">Select File:</label>
        <input type="file" className="form-control" onChange={handleFileChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Enter Room Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleUploadAndAssignRoom}>Upload and Assign Room</button>
    </div>
  );
};

export default UploadStudents;
