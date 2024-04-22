import React, { useEffect, useState } from 'react';
import apiService from '../services/api';
import EditItem from './EditItem';
const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [dataType, setDataType] = useState('teacher'); // Default view
  //const [allRooms, setAllRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openEditModal = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedItem(null);
    setIsEditModalOpen(false);
  };
  const fetchData = async (type) => {
    try {
      let response;
      if (type === 'student') {
        response = await apiService.fetchStudents();
      } else if (type === 'room') {
        response = await apiService.fetchAvailableRooms();
      } else {
        response = await apiService.fetchTeachers();
      }
      setData(response); // Assuming response is the data you want to set
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData(dataType);
  }, [dataType]);
  


  const renderTableHeaders = () => {
    if (dataType === 'student') {
      return (
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">CNE</th>
          <th scope="col">Action</th>
        </tr>
      );
    } else if (dataType === 'room') {
      return (
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      );
    } else {
      // Default to rendering headers for teachers
      return (
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Mater</th>
          <th scope="col">Action</th>
        </tr>
      );
    }
  };

  const renderTableBody = () => {
    return data.map((item, index) => (
      <tr key={index}>
        {dataType === 'room' && (
          <>
          <th scope="row" key={index}>
                  {index + 1}
                </th>
            {/* <td>{item.id}</td> */}
            <td>{item.roomName}</td>
            <td>
              <button className="btn btn-primary mx-2">View</button>
              <button className="btn btn-outline-primary mx-2"
              onClick={() => openEditModal(item)}
              >Edit</button>
              {isEditModalOpen && (
               <EditItem
               item={selectedItem}
               dataType={dataType}
               closeModal={closeEditModal}
               fetchData={fetchData}
                />        
             )}
              <button
                className="btn btn-danger mx-2"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </td>
          </>
        )}
        {dataType === 'student' && (
          <>
          <th scope="row" key={index}>
                  {index + 1}
                </th>
            {/* <td>{item.id}</td> */}
            <td>{item.studentName}</td>
            <td>{item.cne}</td>
            <td>
              {/* <button className="btn btn-primary mx-2">View</button> */}
              <button className="btn btn-outline-primary mx-2"
             // onClick={() => updateItem(item.id)}
              onClick={() => openEditModal(item)}
              >Edit</button> 
              {isEditModalOpen && (
              <EditItem
              item={selectedItem}
              dataType={dataType}
              closeModal={closeEditModal}
               fetchData={fetchData}
               />        
            )}
              <button
                className="btn btn-danger mx-2"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </td>
          </>
        )}
        {dataType === 'teacher' && (
          <>
          <th scope="row" key={index}>
                  {index + 1}
                </th>
            {/* <td>{item.id}</td> */}
            <td>{item.username}</td>
            <td>{item.mater}</td>
            <td>
              {/* <button className="btn btn-primary mx-2">View</button> */}
              <button className="btn btn-outline-primary mx-2"
              //here is updating teacher method 
               onClick={() => openEditModal(item)}
               >Edit</button>
               {isEditModalOpen && (
                <EditItem
                 item={selectedItem}
                 dataType={dataType}
                 closeModal={closeEditModal}
                 fetchData={fetchData}
                  />        
               )}
              <button
                className="btn btn-danger mx-2"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </td>
          </>
        )}
      </tr>
    ));
  };

  const deleteItem = async (itemId) => {
    try {
      let deleteFunction;
      
      // Determine the delete function based on the data type
      if (dataType === 'student') {
        deleteFunction = apiService.deleteStudent;
      } else if (dataType === 'teacher') {
        deleteFunction = apiService.deleteTeacher;
      } else if (dataType === 'room') {
        deleteFunction = apiService.deleteRoom;
      }
  
      // Make the DELETE request using the appropriate function
      await deleteFunction(itemId);
  
      // If the deletion is successful, update the state or perform any other necessary actions
      setData((prevData) => prevData.filter((item) => item.id !== itemId));
  
      console.log(`Item with ID ${itemId} has been deleted successfully.`);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  

  return (
    <div className="container py-4">
      <div className="mb-4">
        <button
          className={`btn btn-primary mx-2 ${
            dataType === 'teacher' ? 'active' : ''
          }`}
          onClick={() => setDataType('teacher')}
        >
          Teachers
        </button>
        <button
          className={`btn btn-primary mx-2 ${
            dataType === 'student' ? 'active' : ''
          }`}
          onClick={() => setDataType('student')}
        >
          Students
        </button>
        <button
          className={`btn btn-primary mx-2 ${
            dataType === 'room' ? 'active' : ''
          }`}
          onClick={() => setDataType('room')}
        >
          Rooms
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
        ) : (
      <table className="table border shadow">
        <thead>{renderTableHeaders()}</thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
       )}
    </div>
  );
};

export default AdminDashboard;
