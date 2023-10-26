import React, { useState } from 'react';
import './styles.css';

const EmployeeForm = ({ onAdd }) => {
  const [employee, setEmployee] = useState({
    name: '',
    surname: '',
    job: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(employee);
    setEmployee({
      name: '',
      surname: '',
      job: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div className="employee-form-card">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="surname" value={employee.surname} onChange={handleChange} placeholder="Surname" required />
        <input type="text" name="job" value={employee.job} onChange={handleChange} placeholder="Job" required />
        <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" required />
        <input type="tel" name="phone" value={employee.phone} onChange={handleChange} placeholder="Phone" required />
        <button type="submit" className="add-button">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
