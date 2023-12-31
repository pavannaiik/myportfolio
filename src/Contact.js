import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Make sure your CSS file is correctly linked

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace with your EmailJS service ID, template ID, and user ID
        const serviceID = 'service_34m04cr';
        const templateID = 'template_es9co0g';
        const userID = 'R2CtwvJyWy-9T4n6N';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                // Handle success here (e.g., showing a success message)
                // Optionally reset the form after successful submission
                setFormData({name: '', email: '', message: ''});
            }, (err) => {
                console.log('FAILED...', err);
                // Handle errors here (e.g., showing an error message)
            });
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Get in Touch!</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Name" 
                        required 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Email" 
                        required 
                    />
                </div>
                <div className="input-group">
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Message"
                        required
                    />
                </div>
                <button type="submit" className="send-button">Send</button>
            </form>
            <footer className="contact-footer">
                © 2023 PavanKalyan Nayak Guguloth
            </footer>
        </div>
    );
}

export default Contact;
