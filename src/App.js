import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './App.css'; // Make sure your CSS file is properly linked

const App = () => {
    return (
        <div>
            <Header />
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
            <Footer />
        </div>
    );
}

export default App;
