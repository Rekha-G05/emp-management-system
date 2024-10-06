import React, { useState } from "react";
import axios from "axios";
import "../../src/styles.css";

axios.defaults.baseURL = "http://localhost:5032";

const EmployeeForm = ({ refreshEmployees, employeeToEdit, setActiveTab }) => {
  const [name, setName] = useState(employeeToEdit ? employeeToEdit.name : "");
  const [position, setPosition] = useState(employeeToEdit ? employeeToEdit.position : "");
  const [salary, setSalary] = useState(employeeToEdit ? employeeToEdit.salary : "");
  const [showAlert, setShowAlert] = useState(false);
  const [actionType, setActionType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setActionType(employeeToEdit ? "update" : "add");
    setShowAlert(true);
  };

  const confirmAction = async () => {
    try {
      const employeeData = {
        Id: employeeToEdit ? employeeToEdit.id : 0,
        Name: name,
        Position: position,
        Salary: salary,
      };

      if (actionType === "update") {
        await axios.put(`/api/employees/${employeeToEdit.id}`, employeeData);
      } else {
        await axios.post("/api/employees", employeeData);
      }
      refreshEmployees();
      resetForm();
      setActiveTab("list");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`An error occurred: ${error.message}`);
    } finally {
      setShowAlert(false); 
    }
  };

  const resetForm = () => {
    setName("");
    setPosition("");
    setSalary("");
    setActionType("");
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />

        <div className="button-group">
          <button className="edit-button" type="submit">
            {employeeToEdit ? "Update" : "Add"} Employee
          </button>
        </div>
      </form>
      {showAlert && (
        <div className="alert">
          <span>
            Are you sure you want to {actionType === "update" ? "update" : "add"} this employee?
          </span>
          <div>
            <button className="alert-confirm" onClick={confirmAction}>
              Yes
            </button>
            <button className="alert-close" onClick={closeAlert}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;
