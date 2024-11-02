const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db'); // Import database connection function
const userRoutes = require('./routes/userRoutes'); // Import user routes
require('dotenv').config(); // Load environment variables from .env

// Create an instance of Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON data from incoming requests
app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));

// Define a test route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Use user routes for handling user-related requests
app.use('/api/users', userRoutes);

// Define the port and start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


