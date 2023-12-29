import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Make sure to create a corresponding CSS file

const Header = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <NavLink className="nav-link" to="/about">About Me</NavLink>
                <NavLink className="nav-link" to="/skills">My Skills</NavLink>
                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </nav>
        </header>
    );
}

export default Header;
