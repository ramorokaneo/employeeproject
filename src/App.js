import React, { useState } from 'react';
import EmployeeList from '../src/Component/EmployeeList';
import EmployeeForm from '../src/Component/EmployeeForm';
import data from './db.json';

function App() {
  const [employees, setEmployees] = useState(data.employee);

  const handleAddEmployee = (newEmployee) => {
    // Generate a new ID for the employee
    newEmployee.id = employees.length + 1;
    setEmployees([...employees, newEmployee]);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="App">
      <h1>Employee Database</h1>
      <EmployeeForm onAdd={handleAddEmployee} />
      <EmployeeList employees={employees} onDelete={handleDeleteEmployee} />
    </div>
  );
}

export default App;
