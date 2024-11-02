// server/routes/userRoutes.js
const express = require('express');
const { login, register } = require('../controllers/userController');
const { createUser, getAllUsers } = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/', createUser);
router.post('/register', register);
router.post('/login', login);

// Route to get all users
router.get('/', getAllUsers);

module.exports = router;
