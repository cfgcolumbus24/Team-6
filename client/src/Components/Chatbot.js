// src/Components/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;

        // Add user message to messages list
        setMessages([...messages, { text: input, user: true }]);
        
        try {
            // Send user input to the chatbot API
            const response = await axios.post('http://localhost:5001/api/chatbot', { message: input });
            setMessages([...messages, { text: input, user: true }, { text: response.data.reply, user: false }]);
        } catch (error) {
            console.error("Error with chatbot:", error);
            setMessages([...messages, { text: input, user: true }, { text: "I'm having trouble responding right now.", user: false }]);
        }
        
        // Clear input field
        setInput('');
    };

    return (
        <div className="chatbot">
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.user ? 'user-message' : 'bot-message'}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;
