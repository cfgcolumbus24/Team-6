// server/controllers/userController.js
const User = require('../models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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


const register = async (req, res) => {
    const {
        username,
        email,
        password,
        fname,
        lname,
        bio,
        title,
        image,
        instagram,
        facebook,
        phoneNumber
    } = req.body;

    // Validate required fields
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

        // Create new user with social media fields
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            fname,
            lname,
            bio,
            title,
            image,
            socialMedia: {
                instagram,
                facebook
            },
            phoneNumber
        });

        await newUser.save();
        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: 'Error registering user' });
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
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Send the response only once
        return res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: 'Error logging in' });
    }
};

// Function to get the profile of the logged-in user
const getUserProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Function to update the profile of the logged-in user
const updateUserProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const updates = req.body;

        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true }).select('-password');
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        console.error("Error updating user profile:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

// Export the functions to be used in routes
module.exports = {
    createUser,
    login,
    register,
    getAllUsers,
    getUserProfile,
    updateUserProfile,
    verifyToken
};
