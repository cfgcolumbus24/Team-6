// server/routes/chatbotRoutes.js
const express = require('express');
const router = express.Router();
require('dotenv').config(); // Load environment variables
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.post('/', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // or 'gpt-4' if you have access
            messages: [{ role: 'user', content: message }],
        });

        const reply = response.choices[0].message.content;

        res.json({ reply });
    } catch (error) {
        console.error("Error with OpenAI API:", error);
        res.status(500).json({ reply: "Sorry, I'm having trouble responding right now." });
    }
});

module.exports = router;
