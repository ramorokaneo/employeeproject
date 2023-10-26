import React, { useState } from 'react';

const EmployeeItem = ({ employee, onDelete, onEdit }) => {
  const { id, name, surname, job, email, phone } = employee;

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '5px', // Curved edges
    margin: '5px', // Spacing between buttons
  };

  const [isEditing, setIsEditing] = useState(false);

  const [editedEmployee, setEditedEmployee] = useState({
    name: name,
    surname: surname,
    job: job,
    email: email,
    phone: phone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Save the edited employee data to local storage.
    saveToLocalStorage(id, editedEmployee);

    // Exit edit mode and update the component state.
    setIsEditing(false);
  };

  const saveToLocalStorage = (id, updatedEmployee) => {
    // Retrieve the existing employee data from local storage.
    const storedData = JSON.parse(localStorage.getItem('employeeData')) || {};

    // Update the data for the specific employee.
    storedData[id] = updatedEmployee;

    // Save the updated data back to local storage.
    localStorage.setItem('employeeData', JSON.stringify(storedData));
  };

  return (
    <li className="employee-card">
      {isEditing ? (
        // Edit Form
        <form onSubmit={handleEditSubmit}>
          <input type="text" name="name" value={editedEmployee.name} onChange={handleChange} />
          <input type="text" name="surname" value={editedEmployee.surname} onChange={handleChange} />
          <input type="text" name="job" value={editedEmployee.job} onChange={handleChange} />
          <input type="email" name="email" value={editedEmployee.email} onChange={handleChange} />
          <input type="tel" name="phone" value={editedEmployee.phone} onChange={handleChange} />
          <button style={buttonStyle} type="submit">Save</button>
        </form>
      ) : (
        // Employee Details
        <div>
          <strong>{name} {surname}</strong>
          <p>Job: {job}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <button style={buttonStyle} onClick={handleEditClick}>Edit</button>
          <button style={buttonStyle} onClick={() => onDelete(id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default EmployeeItem;




