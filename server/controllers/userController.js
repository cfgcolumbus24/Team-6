// server/controllers/userController.js
const User = require('../models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Function to create a new user
const createUser = async (req, res) => {
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
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user instance
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            username,
            email,
            password: hashedPassword,
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

        // Exclude password from the response
        const { password: _, ...userData } = savedUser.toObject();
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: userData
        });
    } catch (error) {
        console.error("Error creating user:", error);
        if (error.code === 11000) {
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

// Function to get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude password field
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).json({ 
            success: false, 
            message: 'Error retrieving users', 
            error: error.message 
        });
    }
};

// Export the functions
module.exports = {
    createUser,
    getAllUsers
};
