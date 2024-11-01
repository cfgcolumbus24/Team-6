const User = require('../models/User');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      password,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Error adding user" });
  }
};

module.exports = { createUser };
