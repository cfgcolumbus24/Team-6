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


router.post('/', createUser);
router.post('/register', register);
router.post('/login', login);

// Routes for user profile (protected)
router.get('/me', verifyToken, getUserProfile);
router.put('/me', verifyToken, updateUserProfile);

// Route to get all users
router.get('/', getAllUsers);

router.get('/directory', async (req, res) => {
    console.log("Received request for /directory");  // Log when the route is accessed
    try {
        const users = await User.find({}, '-password'); // Fetch all users excluding the password field
        console.log("Fetched users from database:", users);  // Log the users retrieved
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
});


router.get('/profile/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
            
        }
        const { password, ...userData } = user.toObject();
        res.json({ success: true, user: userData });
        
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
});


module.exports = router;







