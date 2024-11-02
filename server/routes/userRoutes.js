// server/routes/userRoutes.js
const express = require('express');
const {
    createUser,
    login,
    register,
    getAllUsers,
    getUserProfile,
    updateUserProfile,
    verifyToken // Ensure this is imported
} = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/', createUser);
router.post('/register', register);
router.post('/login', login);

// Routes for user profile (protected)
router.get('/me', verifyToken, getUserProfile);
router.put('/me', verifyToken, updateUserProfile);

// Route to get all users
router.get('/', getAllUsers);

module.exports = router;







