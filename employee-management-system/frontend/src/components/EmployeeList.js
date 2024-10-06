import React from "react";
import "../../src/styles.css";

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  console.log("employees", employees);

  return (
    <div>
      <h2 className="subheader-title">Employee List</h2>

      {employees.length === 0 ? (
        <div className="no-employees-message">
          <p>No employee data available. Please add an employee.</p>
        </div>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id} className="employee-item">
              <span className="employee-details">
                {employee.name} - {employee.position} - ${employee.salary}
              </span>
              <div className="button-group">
                <button className="edit-button" onClick={() => onEdit(employee)}>
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => {
                    if (
                      window.confirm(
                        `Are you sure you want to delete employee ${employee.name}?`
                      )
                    ) {
                      onDelete(employee.id);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
