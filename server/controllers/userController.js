// server/controllers/userController.js
const User = require('../models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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

const register = async (req, res) => {
    const { username, email, password, fname, lname, bio, title, image, socialMedia, phoneNumber } = req.body;

    if (!username || !email || !password || !fname || !lname || !bio || !title || !phoneNumber) {
        return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(409).json({ message: 'User already exists.' });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            fname,
            lname,
            bio,
            title,
            image,
            socialMedia,
            phoneNumber
        });

        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: 'Error registering user' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate JWT
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET, // Make sure to set this in your environment variables
            { expiresIn: '1h' }
        );

        res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: 'Error logging in' });
    }
};

// Export the functions to be used in routes
module.exports = { createUser, login, register };
