import React, { useEffect, useState } from 'react';
import apiService from '../services/api';

const AssignRoomsToTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [assignedRooms, setAssignedRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [allRooms, setAllRooms] = useState([]);
  const [deletionmessage, setDMessage] = useState('');
  const [assigningmessage, setAMessage] = useState('');
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const teachersData = await apiService.fetchTeachers();
      setTeachers(teachersData);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const fetchAssignedRooms = async (teacherId) => {
    try {
      const assignedRoomsData = await apiService.fetchAssignedRooms(teacherId);
      setAssignedRooms(assignedRoomsData);
    } catch (error) {
      console.error('Error fetching assigned rooms:', error);
    }
  };

  const fetchAvailableRooms = async () => {
    try {
      const allRoomsData = await apiService.fetchAvailableRooms();
      setAllRooms(allRoomsData);
    } catch (error) {
      console.error('Error fetching all rooms:', error);
    }
  };

  const handleTeacherChange = (event) => {
    const teacherId = parseInt(event.target.value, 10);
    setSelectedTeacher(teacherId);
    fetchAssignedRooms(teacherId);
  };

  const deleteAssignedRooms = async () => {
    try {
      if (selectedTeacher && selectedRooms.length > 0) {
        await apiService.deleteRoomsFromTeacher(selectedTeacher, selectedRooms);
        setDMessage('Assigned rooms deleted successfully!');
        // Refresh assigned rooms after deletion
        fetchAssignedRooms(selectedTeacher);
        // Clear selected rooms
        setSelectedRooms([]);
      }
    } catch (error) {
      console.error('Error deleting assigned rooms:', error);
      setDMessage('Error deleting assigned rooms.');
    }
  };

  const showAllRooms = () => {
    // Fetch all rooms when the button is clicked
    fetchAvailableRooms();
    // Clear selected rooms
    setSelectedRooms([]);
  };

  const assignRooms = async () => {
    try {
      if (selectedTeacher && selectedRooms.length > 0) {
        await apiService.assignRoomsToTeacher(selectedTeacher, selectedRooms);
        setAMessage('Rooms assigned successfully!');
        // Refresh assigned rooms after assignment
        fetchAssignedRooms(selectedTeacher);
        // Clear selected rooms
        setSelectedRooms([]);
      }
    } catch (error) {
      console.error('Error assigning rooms:', error);
      setAMessage('Error assigning rooms.');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <h3 className="mb-4">Assign Rooms to Teacher</h3>
          <div className="mb-3">
            <label htmlFor="teacherSelect" className="form-label fs-6">
              Select Teacher:
            </label>
            <select
              id="teacherSelect"
              className="form-select"
              onChange={handleTeacherChange}
            >
              <option value="">Select Teacher</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.username}
                </option>
              ))}
            </select>
          </div>
        </div>
        {selectedTeacher && (
          <div className="col-md-8">
            <h4 className="mb-3">Assigned Rooms</h4>
            <ul className="list-group mb-3">
              {assignedRooms.map((room) => (
                <li
                  key={room.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={selectedRooms.includes(room.id)}
                          onChange={() => setSelectedRooms((prev) => (
                            prev.includes(room.id)
                              ? prev.filter((id) => id !== room.id)
                              : [...prev, room.id]
                          ))}
                        />
                   <label className="form-check-label">{room.roomName}</label>
                   </div>
                </li>
              ))}
            </ul>
            <div>
              <button
                className="btn btn-danger"
                onClick={deleteAssignedRooms}
              >
                Delete Assigned Rooms
              </button>
              {deletionmessage && <p className="mt-3 alert alert-info">{deletionmessage}</p>}
            </div>
            <div className="mt-4">
              <button
                className="btn btn-primary me-2"
                onClick={showAllRooms}
              >
                Show All Rooms
              </button>
            </div>
            {allRooms.length > 0 && (
              <>
                <h4 className="mt-4 mb-3">Available Rooms</h4>
                <ul className="list-group mb-3">
                  {allRooms.map((room) => (
                    <li
                      key={room.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={selectedRooms.includes(room.id)}
                          onChange={() => setSelectedRooms((prev) => (
                            prev.includes(room.id)
                              ? prev.filter((id) => id !== room.id)
                              : [...prev, room.id]
                          ))}
                        />
                        <label className="form-check-label">{room.roomName}</label>
                      </div>
                    </li>
                  ))}
                </ul>
                <div>
                  <button
                    className="btn btn-success"
                    onClick={assignRooms}
                  >
                    Assign Rooms
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      {assigningmessage && <p className="mt-3 alert alert-info">{assigningmessage}</p>}
    </div>
  );
};

export default AssignRoomsToTeacher;
