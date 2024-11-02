// server/routes/userRoutes.js
const express = require('express');
const { createUser, getAllUsers } = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/', createUser);

// Route to get all users
router.get('/', getAllUsers);

module.exports = router;
