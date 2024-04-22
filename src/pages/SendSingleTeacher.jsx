import React, { useState } from 'react';
import api from '../services/api';
const SendSingleTeacher = () => {
  const [teacherData, setTeacherData] = useState({
    username: '',
    password: '',
    mater: '',
  });

  // Check if input empty
  const [inputErrors, setInputErrors] = useState({
    username: '',
    password: '',
    mater: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate the input
    if (name === 'username' && value.trim() === '') {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        username: 'Username is required.',
      }));
    } else if (name === 'password' && value.trim() === '') {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required.',
      }));
    } else if (name === 'mater' && value.trim() === '') {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        mater: 'Mater is required.',
      }));
    } else {
      // Reset the error if the input is valid
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };
  
  const handleUpload = async () => {
     // Check for any remaining errors before uploading
     if (Object.values(inputErrors).some((error) => error !== '')) {
      alert('Please fill in all required fields before uploading.');
      return;
    }
    try {
      await api.sendSingleTeacher(teacherData);
      alert('Teacher uploaded successfully!');
    } catch (error) {
      console.error('Error uploading teacher:', error);

      if (error.response && error.response.status === 400) {
        // Handle specific error code (e.g., duplicate username)
       // alert(`Error: ${error.response}`);
       throw new Error(error.response);
       } else {
        // Handle other errors
        alert('Error uploading teacher. unable to connect ');
      }
    }

    // Reset input errors after upload
    setInputErrors({
      username: '',
      password: '',
      mater: '',
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Upload Single Teacher</h2>
      <p>Please enter the teacher's information:</p>
      <label className="mb-2">
        Username:
        <input
          type="text"
          name="username"
          value={teacherData.username}
          onChange={handleInputChange}
          className="form-control"
          required
        />
        {inputErrors.username && (
          <span style={{ color: 'red' }}>{inputErrors.username}</span>
        )}
      </label>
      <br />
      <label className="mb-2">
        Password:
        <input
          type="text"
          name="password"
          value={teacherData.password}
          onChange={handleInputChange}
          className="form-control"
        />
        {inputErrors.password && (
          <span style={{ color: 'red' }}>{inputErrors.password}</span>
        )}
      </label>
      <br />
      <label className="mb-2">
        Mater:
        <input
          type="text"
          name="mater"
          value={teacherData.mater}
          onChange={handleInputChange}
          className="form-control"
        />
        {inputErrors.mater && (
          <span style={{ color: 'red' }}>{inputErrors.mater}</span>
        )}
      </label>
      <br />
      <button onClick={handleUpload} className="btn btn-primary">
        Upload Teacher
      </button>
    </div>
  );
};

export default SendSingleTeacher;
