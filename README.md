# Employee Management System

## Overview
The Employee Management System is a web application designed to manage employee records, including their names, positions, and salaries. 

## Features
- Add, edit, and delete employee records
- View a list of employees
- Responsive design for mobile and desktop users

## Technologies Used
- Frontend: React.js
- Backend: ASP.NET Core Web API
- Database: PostgreSQL

## Prerequisites
- Node.js (for frontend)
- .NET SDK (for backend)
- PostgreSQL (for database)

## Getting Started

### Clone the Repository

git clone https://github.com/Rekha-G05/emp-management-system.git
cd emp-management-system

### Setting Up the Database

1. **Create the Database**

   CREATE DATABASE EmployeeManagement;


2. **Create the Employees Table**

   \c EmployeeManagement;

   CREATE TABLE Employees (
       Id SERIAL PRIMARY KEY,
       Name VARCHAR(100) NOT NULL,
       Position VARCHAR(100) NOT NULL,
       Salary DECIMAL(10, 2) NOT NULL
   );

   -- Insert sample data

   INSERT INTO Employees (Name, Position, Salary) VALUES
   ('Rekha G', 'Software Engineer', 60000.00),
   ('Jane Smith', 'Product Manager', 80000.00),
   ('Emily Johnson', 'Designer', 55000.00);

### Configuration

#### Connection String
Update your connection string in the `Startup.cs` file for the backend:

DATABASE_URL=Host=localhost;Port=5432;Database=EmployeeManagement;Username=your_username;Password=your_password;

### Running the Application

#### Backend
1. Navigate to the backend directory.
2. Run the following commands:
 
   dotnet restore
   dotnet run

#### Frontend
1. Navigate to the frontend directory.
2. Run the following commands:

   npm install
   npm start
