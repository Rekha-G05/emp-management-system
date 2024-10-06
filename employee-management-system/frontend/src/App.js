import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "../../../employee-management-system/frontend/src/styles.css";

axios.defaults.baseURL = "http://localhost:5032";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [activeTab, setActiveTab] = useState("list");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("/api/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
      setErrorMessage("Failed to fetch employees. Please try again.");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setActiveTab("form");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axios.delete(`/api/employees/${id}`);
        fetchEmployees();
        setSuccessMessage("Employee deleted successfully.");
      } catch (error) {
        console.error("Error deleting employee:", error);
        setErrorMessage("Failed to delete employee. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <h1 className="header-title">Employee Management System</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <div className="tab-header">
        <button onClick={() => setActiveTab("list")}>Employee List</button>
        <button
          onClick={() => {
            setActiveTab("form");
            setEditingEmployee(null);
            setErrorMessage("");
            setSuccessMessage("");
          }}
        >
          Add Employee
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "list" && (
          <EmployeeList
            employees={employees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        {activeTab === "form" && (
          <EmployeeForm
            refreshEmployees={fetchEmployees}
            employeeToEdit={editingEmployee}
            setActiveTab={setActiveTab}
          />
        )}
      </div>
    </div>
  );
};

export default App;
