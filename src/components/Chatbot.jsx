import { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Optional for styling
import Button from '../common/components/Button';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (!input.trim()) return;

        // Add the user's message to the chat
        const userMessage = { sender: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);

        try {
            // Send the query to the backend
            const response = await axios.post('http://localhost:3000/chat', { query: input });

            // Add ChatGPT's response to the chat
            const botMessage = { sender: 'bot', text: response.data.reply };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Error communicating with ChatGPT:', error.message);
            const errorMessage = { sender: 'bot', text: 'Sorry, I could not process your query. Please try again.' };
            setMessages((prev) => [...prev, errorMessage]);
        }

        // Clear the input field
        setInput('');
    };

    return (
        <div className="chatbot-container">
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button onClick={handleSend}>Send</Button>
            </div>
        </div>
    );
};

export default Chatbot;
