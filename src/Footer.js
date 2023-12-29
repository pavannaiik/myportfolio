import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://www.linkedin.com/in/guguloth-pavankalyan-nayak/" className="social-link"  target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/pavannaiik" className="social-link"  target="_blank" rel="noopener noreferrer">GitHub</a>
            {/* Add more social media links here */}
        </footer>
    );
}

export default Footer;
