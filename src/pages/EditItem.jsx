// EditItem.jsx
import React, { useState } from 'react';
import apiService from '../services/api';

const EditItem = ({ item, dataType, closeModal, fetchData }) => {
  const [editedData, setEditedData] = useState(item);

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      // Call the appropriate API update method based on the data type
      if (dataType === 'student') {
        await apiService.updateStudent(item.id, editedData);
      } else if (dataType === 'teacher') {
        await apiService.updateTeacher(item.id, editedData);
      } else if (dataType === 'room') {
        await apiService.updateRoom(item.id, editedData);
      }

      // After updating, fetch the updated data again
      fetchData();

      // Close the modal or navigate away
      closeModal();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit {dataType}</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            {/* Render form fields based on item type */}
            {dataType === 'student' && (
              <>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={editedData.studentName}
                    onChange={handleChange}
                  /><br/>
                  <label htmlFor="cne" className="form-label">
                    CNE:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cne"
                    name="cne"
                    value={editedData.cne}
                    onChange={handleChange}
                  />
                </div>
                {/* Add more form fields as needed for students */}
              </>
            )}

            {dataType === 'teacher' && (
              <>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={editedData.username}
                    onChange={handleChange}
                  />
                  <label htmlFor="mater" className="form-label">
                    Mater:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mater"
                    name="mater"
                    value={editedData.mater}
                    onChange={handleChange}
                  />
                </div>
                {/* Add more form fields as needed for teachers */}
              </>
            )}

            {dataType === 'room' && (
              <>
                <div className="mb-3">
                  <label htmlFor="roomName" className="form-label">
                    Room Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="roomName"
                    name="roomName"
                    value={editedData.roomName}
                    onChange={handleChange}
                  />
                </div>
                {/* Add more form fields as needed for rooms */}
              </>
            )}
          </div>
          <div className="modal-footer">
            {/* Button to update the item */}
            <button type="button" className="btn btn-primary" onClick={handleUpdate}>
              Update
            </button>
            <button type="button" className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItem;


// const EditItem = ({ item, updateItem, closeModal }) => {
//   const [editedData, setEditedData] = useState(item);

//   const handleChange = (e) => {
//     // Update the editedData state based on the form input changes
//     setEditedData({ ...editedData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async () => {
//     try {
//       // Call the updateItem function passed as a prop
//       await updateItem(item.id, editedData);
//       // Close the modal or navigate away
//       closeModal();
//     } catch (error) {
//       console.error('Error updating item:', error);
//     }
//   };

//   return (
//     <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">Edit Item</h5>
//             <button type="button" className="btn-close" onClick={closeModal}></button>
//           </div>
//           <div className="modal-body">
//             {/* Form fields for editing item details */}
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={editedData.name}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Add more form fields as needed for your item properties */}
//           </div>
//           <div className="modal-footer">
//             {/* Button to update the item */}
//             <button type="button" className="btn btn-primary" onClick={handleUpdate}>
//               Update
//             </button>
//             <button type="button" className="btn btn-secondary" onClick={closeModal}>
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditItem;
