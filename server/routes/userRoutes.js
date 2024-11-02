// server/routes/userRoutes.js
const express = require('express');
const { login, register } = require('../controllers/userController');
const { createUser, getAllUsers } = require('../controllers/userController');
const User = require('../models/User');
const router = express.Router();


router.post('/', createUser);
router.post('/register', register);
router.post('/login', login);

// Route to get all users
router.get('/', getAllUsers);

router.get('/profile/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) return res.status(404).send('User not found');
        res.json(user); // Return the user data
    } catch (error) {
        res.status(500).send('Server error');
    }
});


module.exports = router;
