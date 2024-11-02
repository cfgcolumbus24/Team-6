// server/routes/userRoutes.js
const express = require('express');
const { createUser } = require('../controllers/userController');
const { login, register } = require('../controllers/authController');

const router = express.Router();

// Route to create a new user
router.post('/', createUser);
router.post('/register', register);
router.post('/login', login);

module.exports = router;

