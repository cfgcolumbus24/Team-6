// server/controllers/userController.js
const User = require('../models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Function to create a new user
const createUser = async (req, res) => {
    // Destructure the request body
    const {
        username,
        email,
        password,
        fname,
        lname,
        bio,
        title,
        image,
        socialMedia,
        phoneNumber
    } = req.body;

    // Validate required fields
    if (!username || !email || !password || !fname || !lname || !bio || !title || !phoneNumber) {
        return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    try {
        // Hash the password before saving
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user instance
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(), // Generate a new ObjectId
            username,
            email,
            password: hashedPassword, // Store the hashed password
            fname,
            lname,
            bio,
            title,
            image,
            socialMedia,
            phoneNumber,
        });

        // Save the user to the database
        const savedUser = await newUser.save();
        
        // Respond with the created user data, excluding the password
        const { password: _, ...userData } = savedUser.toObject(); // Remove password from response
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: userData
        });
    } catch (error) {
        console.error("Error creating user:", error);
        if (error.code === 11000) { // Duplicate key error (unique constraint violation)
            return res.status(409).json({ 
                success: false, 
                message: 'Username, email, or phone number already exists.' 
            });
        }
        res.status(500).json({ 
            success: false, 
            message: 'Error creating user', 
            error: error.message 
        });
    }
};

// Export the functions to be used in routes
module.exports = {
    createUser,
};
