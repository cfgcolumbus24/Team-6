const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db'); // Import database connection function
const userRoutes = require('./routes/userRoutes'); // Import user routes
const eventRoutes = require('./routes/eventsRoute'); // Import event routes
const resourceRoutes = require('./routes/resourcesRoute'); // Import resource routes

require('dotenv').config(); // Load environment variables from .env

// Create an instance of Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON data from incoming requests
app.use(express.json()); // This will parse incoming JSON data correctly

// Define a test route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Use routes for handling requests
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/resources', resourceRoutes);

// Define the port and start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
