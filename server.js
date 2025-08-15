const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware to enable CORS and parse JSON request bodies
app.use(cors());
app.use(express.json());

// Set the port for the server to listen on
const PORT = process.env.PORT || 5000;

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/team-task-tracker';
// Connect to MongoDB and handle connection events
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err)); // Improved error logging

// Route to handle GET requests to '/api/tasks'
app.get('/api/tasks', (req, res) => {
  // TODO: Replace with actual data retrieval logic
  res.send('GET request to the homepage');  // Placeholder response
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});