import React, { useState } from 'react';
import './Contact.css'; // Make sure to create a corresponding CSS file

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
        // Handle form submission logic here
        console.log(formData);
    }

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
