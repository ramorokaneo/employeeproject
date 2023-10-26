import React from 'react';
import EmployeeItem from './EmployeeItem';
import './styles.css';

const EmployeeList = ({ employees, onDelete }) => {
  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <EmployeeItem key={employee.id} employee={employee} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
