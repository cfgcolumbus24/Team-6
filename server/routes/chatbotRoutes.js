// server/routes/chatbotRoutes.js
const express = require('express');
const router = express.Router();
require('dotenv').config();
const OpenAI = require('openai');
const User = require('../models/User'); // Adjust the path as necessary

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.post('/', async (req, res) => {
    const { message } = req.body;

    // Check if the message is asking for user information
    if (message.toLowerCase().includes('user') || message.toLowerCase().includes('information')) {
        try {
            const users = await User.find(); // Fetch all users from the database
            const userInfos = users.map(user => `${user.fname} ${user.lname}: ${user.email}`).join('\n');
            const reply = `Here are the users:\n${userInfos}`;

            return res.json({ reply });
        } catch (error) {
            console.error("Error fetching users from the database:", error);
            return res.status(500).json({ reply: "I'm having trouble accessing user information right now." });
        }
    }

    // If the message is not a user info request, send it to OpenAI
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // or 'gpt-4' if you have access
            messages: [{ role: 'user', content: message }],
        });

        const reply = response.choices[0].message.content;
        return res.json({ reply });
    } catch (error) {
        console.error("Error with OpenAI API:", error);
        return res.status(500).json({ reply: "I'm having trouble responding right now." });
    }
});

module.exports = router;
