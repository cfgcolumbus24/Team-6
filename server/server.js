const express = require('express');

const connectDB = require('./config/db'); // Import database connection function
require('dotenv').config(); // Load environment variables from .env

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON data
app.use(express.json());

// Define a test route
app.get('/', (req, res) => res.send('API is running'));

// Define the port and start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

