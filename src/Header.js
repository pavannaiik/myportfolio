import React from 'react';
import './Header.css'; // Ensure your CSS file is properly linked

const Header = () => {
    return (
        <>
            <div className="top-container">
                <nav className="top-nav">
                    <a href="#about" className="nav-link">About Me</a>
                    <a href="#skills" className="nav-link">My Skills</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </div>
            <header className="header-main">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
                <div className="intro-text">
                    <h1>Hey, I'm Pavan.</h1>
                    <p>I'm an aspiring Backend Software Engineer passionate about building large scale applications.</p>
                    {/* Social media icons go here */}
                </div>
            </header>

        </>
    );
}

export default Header;
