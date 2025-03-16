
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection
const createConnection = () => {
  try {
    return mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306
    });
  } catch (error) {
    console.error('Error creating database connection:', error);
    return null;
  }
};

// Test database connection
let connection;
try {
  connection = createConnection();
  if (connection) {
    console.log('Database connection successful');
  }
} catch (error) {
  console.error('Failed to connect to database:', error);
}

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// Auth endpoints
app.post('/api/auth/login', (req, res) => {
  // Implement login logic here
  res.json({ message: 'Login endpoint' });
});

app.post('/api/auth/logout', (req, res) => {
  // Implement logout logic here
  res.json({ message: 'Logout endpoint' });
});

// Students endpoints
app.get('/api/students', (req, res) => {
  if (!connection) {
    return res.status(500).json({ error: 'Database connection not available' });
  }
  
  connection.query('SELECT * FROM students', (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to fetch students' });
    }
    res.json({ data: results });
  });
});

app.post('/api/students', (req, res) => {
  // Implement create student logic
  res.json({ message: 'Create student endpoint' });
});

app.delete('/api/students/:id', (req, res) => {
  // Implement delete student logic
  res.json({ message: `Delete student ${req.params.id} endpoint` });
});

// Assessments endpoints
app.get('/api/assessments', (req, res) => {
  if (!connection) {
    return res.status(500).json({ error: 'Database connection not available' });
  }
  
  connection.query('SELECT * FROM assessments', (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to fetch assessments' });
    }
    res.json({ data: results });
  });
});

app.post('/api/assessments', (req, res) => {
  // Implement create assessment logic
  res.json({ message: 'Create assessment endpoint' });
});

app.delete('/api/assessments/:id', (req, res) => {
  // Implement delete assessment logic
  res.json({ message: `Delete assessment ${req.params.id} endpoint` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
