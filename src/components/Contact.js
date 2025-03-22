import React, { useState } from 'react';
import './Contact.css';  // Import the CSS for the Contact page

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-content">
                <SendEmail />
                <ContactInfo />
            </div>
        </div>
    );
}

function ContactInfo() {
    return (
        <div className="contact-info">
            <h2>S.R Painting Solutions</h2>
            <h3>Hours</h3>
            <p>Monday - Saturday: 9am - 5pm</p>
            <h3>Contact</h3>
            <p>Email: sr.paintingsolutions@gmail.com</p>
            <p>Phone: (970) 688-2760</p>
        </div>
    );
}

function SendEmail() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', { name, email, message });
    };

    return (
        <div className="email-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
