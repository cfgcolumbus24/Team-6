const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db'); // Import database connection function
const userRoutes = require('./routes/userRoutes'); // Import user routes
const eventRoutes = require('./routes/eventsRoute'); // Import event routes
const resourceRoutes = require('./routes/resourcesRoute'); // Import resource routes
const chatbotRoutes = require('./routes/chatbotRoutes');

require('dotenv').config(); // Load environment variables from .env

// Create an instance of Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON data from incoming requests
app.use(express.json()); // This will parse incoming JSON data correctly

app.use(cors({ origin: 'http://localhost:3000' }));

// Define a test route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Use routes for handling requests
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/resources', resourceRoutes);

app.use('/api/user', userRoutes);

app.use('/api/chatbot', chatbotRoutes);

app.get('/api/users/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Define the port and start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
