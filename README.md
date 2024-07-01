
# School Management System

A comprehensive system for managing schools, including teachers, students, classes, and user authentication. Built with ReactJS,Node.js, Express, and MongoDB.

## Features

- User Authentication (Signup, Login)
- Teacher Management
- Student Management
- Class Management
- School Analytics

## Prerequisites

- Node.js
- MongoDB
- NPM or Yarn
- React Js

School Management System API
This API is designed to manage a school system, including handling user authentication, teacher management, student management, class management, and school analytics. Below is an overview of the available endpoints, their purposes, and how to use them.

Table of Contents
Authentication
Teachers
Students
Classes
School Analytics
Authentication
These endpoints handle user registration and login, providing JWT tokens for authenticated access to other endpoints.

Routes
POST /api/v1/auth/signup
Register a new user.

POST /api/v1/auth/login
Log in an existing user.

Teachers
These endpoints handle adding and retrieving teacher information.

Routes
POST /api/v1/school/addteacher
Add a new teacher. Requires authentication.

GET /api/v1/school/getallteacher
Get all teachers. Requires authentication.

Students
These endpoints handle adding student information.

Routes
POST /api/v1/school/addstudent
Add a new student. Requires authentication.

Classes
These endpoints handle class information and analytics.

Routes
POST /api/v1/school/addclass
Add a new class. Requires authentication.

GET /api/v1/school/getallclass
Get all classes. Requires authentication.

GET /api/v1/school/classanalytics
Get class analytics. Requires authentication.

GET /api/v1/school/classAnalytic
Get specific class analytic. Requires authentication.

School Analytics
These endpoints handle overall school analytics.

Routes
GET /api/v1/school/analysis
Get overall school analysis. Requires authentication.
