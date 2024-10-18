
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted', { name, email, message });
    };

    return (
        <div className="contact-container">
            <header className="contact-header">
                <h1>Contact Us</h1>
            </header>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </label>
                <button type="submit">Send Message</button>
            </form>
            <footer className="contact-footer">
                <p>&copy; 2024 Fitness Tracker. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Contact;
