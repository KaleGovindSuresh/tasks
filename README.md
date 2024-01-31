Employee Management System
This project is an Employee Management System that allows employees and managers to perform various tasks such as signup/login, department management, employee management, and filtering employees.

Features
Signup/Login Page:

Employees and managers can create accounts and login to access the system.
Department Management:

Managers can create, update, and delete departments.
Only managers have permission to perform these actions.
Employee List Page:

Displays a list of all employees.
Employee Details Page/Model:

Provides detailed information about each employee.
Accessible to both managers and employees.
Employee Filtering:

Allows filtering employees based on location and name in ascending and descending order.
Filtering is implemented using API endpoints.
Department Assignment:

Managers can assign departments to employees.
Backend
Authentication Routes:

Includes signup and login routes for employees and managers.
Department Routes:

CRUD routes for department management.
Only managers can access these routes.
Employee Routes:

CRUD routes for employee management.
Only managers can update and delete employees.
Employee Filtering Endpoints:

Provides endpoints to filter employees based on location in ascending order
