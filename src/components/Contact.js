import React, { useState } from 'react';
import './Contact.css';  // Import the CSS for the Contact page

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the email submission (e.g., by integrating with an email service)
    console.log('Form Submitted:', { name, email, message });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach us at sr.paintingsolutions@gmail.com</p>

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
