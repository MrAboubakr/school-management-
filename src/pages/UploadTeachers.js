import React, { useState } from 'react';
import api from '../services/api';
import AssignRoomsToTeacher from './AssignRoomsToTeacher';
import SendSingleTeacher from './SendSingleTeacher';
const UploadTeachers = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        await api.uploadTeachers(formData);
        alert('Teachers uploaded successfully!');
      } catch (error) {
        console.error('Error uploading teachers:', error);
        alert('Error uploading teachers. Please try again.');
      }
    } else {
      alert('Please choose a file to upload.');
    }
  };

  return (
    <div className="container mt-5">
    <h2 className="mb-4">Upload Teacher</h2>
    <div className="mb-3">
      <label className="form-label">Select File:</label>
      <input type="file" className="form-control" onChange={handleFileChange} />
      <br/>
      <button className="btn btn-primary" onClick={handleUpload}>Upload Teacher</button>
    </div>
        <div>
          <h2 className="mb-3">Single Teacher Upload</h2>
          <div className='single-teacher'>
            <SendSingleTeacher />
          </div>
        </div>
        <div>
          <h2 className="mb-3">Assign Rooms to Teacher</h2>
          <AssignRoomsToTeacher />
        </div>
      </div>
  );
};

export default UploadTeachers;
