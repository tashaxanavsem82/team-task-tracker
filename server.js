const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/team-task-tracker';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err)); // Improved error logging

app.get('/api/tasks', (req, res) => {
  res.send('GET request to the homepage');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});