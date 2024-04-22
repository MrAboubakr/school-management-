import axios from 'axios';

const baseURL = 'http://localhost:8080/api'; // Update with your Spring Boot API base URL

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
//to send only one teacher to DB
const sendSingleTeacher = async (teacherData) => {
    // Validate input data before making the request
    const { username, password, mater } = teacherData;

    if (!username || !password || !mater) {
      throw new Error('All fields are required.');
    }
  try {
    const response = await api.post('/teacher/upload/singleteacher', teacherData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// +------------------------------------------------------------------------------------------------
//                       uploading data 
// +------------------------------------------------------------------------------------------------
const uploadTeachers = async (formData) => {
  try {
    const response = await api.post('/excel/upload/teachers', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
//here we avoiding 2 endopoints assignroom and uploadstudents we integrate them!!!
const uploadStudentsAndRoomName = async (formData) => {
  try {
    const response = await api.post('/excel/upload/students', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const assignRoomsToTeacher = async (teacherId, roomIds) => {
  try {
    const response = await api.post(`/teacher/assign-rooms/${teacherId}`, roomIds);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Server responded with an error:', error.response.data);
      throw new Error(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from the server');
      throw new Error('No response received from the server');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up the request:', error.message);
      throw new Error('Error setting up the request');
    }
  }
};
// +------------------------------------------------------------------------------------------------
//                           fetching data 
// +------------------------------------------------------------------------------------------------
const fetchTeachers = async () => {
  try {
    const response = await api.get('/teacher/all'); // Update with your actual endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};
const fetchStudents = async () => {
  try {
    const response = await api.get('/students/all'); // Update with your actual endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};
const fetchAvailableRooms = async () => {
  try {
    const response = await api.get('/rooms/all'); // Update with your actual endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchRooms = async () => {
  try {
    const response = await api.get('/rooms/by-names'); 
    return response.data;
  } catch (error) {
    throw error;
  }
};
const fetchAssignedRooms = async (teacherId) => {
  try {
    const response = await api.get(`/teacher/${teacherId}/assigned-rooms`); 
    return response.data;
  } catch (error) {
    throw error;
  }
};

// +------------------------------------------------------------------------------------------------
//                     updating data 
// +------------------------------------------------------------------------------------------------
const updateStudent = async (StudentId, newData )=>{
  try {
    const response = await api.put(`/students/update-student/${StudentId}`,newData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const updateTeacher = async (TeacherId, newData )=>{
  try {
    const response = await api.put(`/teacher/update-teacher/${TeacherId}`,newData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const updateRoom = async (roomId, newData )=>{
  try {
    const response = await api.put(`/rooms/update-room/${roomId}`,newData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// +------------------------------------------------------------------------------------------------
//                              deletion data 
// +------------------------------------------------------------------------------------------------
const deleteStudent = async (StudentId )=>{
  try {
    const response = await api.delete(`/students/delete-student/${StudentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const deleteTeacher = async (TeacherId )=>{
  try {
    const response = await api.delete(`/teacher/delete-teacher/${TeacherId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteRoom = async (roomId )=>{
  try {
    const response = await api.delete(`/rooms/delete-room/${roomId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteRoomsFromTeacher = async (teacherId, roomIds) => {
  try {
    const response = await api.delete(`/teacher/${teacherId}/rooms`, { data: roomIds });
    return response.data;
  } catch (error) {
    throw error;
  }
};
const apiService = {
  fetchAssignedRooms,
  uploadTeachers,
  fetchTeachers,
  fetchAvailableRooms,
  fetchStudents,
  sendSingleTeacher,
  uploadStudentsAndRoomName,
  fetchRooms,
  deleteRoomsFromTeacher,
  assignRoomsToTeacher,
  deleteStudent,
  deleteTeacher,
  deleteRoom,
  updateStudent,
  updateTeacher,
  updateRoom,
};
export default apiService;
