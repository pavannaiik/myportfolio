import React from 'react';
import './Projects.css'; // Make sure to create a corresponding CSS file

const Projects = () => {
    const projects = [
        {
            name: 'BrandCollab AI System',
            description: 'Designed a system where brands and influencers can collaborate and find the perfect match for their products and influencers can discover opportunities that align with their personal brand.',
            technologies: 'Transformer Model (LLM), Semantic Matching Algorithms, Recommendation System, Flask, Postgres, SpringBoot, ReactJS'
        },
        {
            name: 'Smart Gardening System',
            description: 'An automated gardening system is designed to monitor and control parameters involved with the growth of plants or saplings such as temperature, humidity, and light intensity.',
            technologies: 'IOT, ThingSpeak for data analytics, Neural Network training for weather forecast'
        },
        {
            name: 'Electronic Toll Gate System',
            description: 'This project aims to eliminate delays on toll roads by collecting tolls without cash and without requiring cars to stop.',
            technologies: 'OpenCV EAST Text Editor, Tesseract v4’s LSTM deep learning text recognition algorithm, Ngrok server'
        }
    ];

    return (
        <div className="projects-container">
            <h1 className="projects-title">PROJECTS</h1>
            {projects.map((project, index) => (
                <div className="project" key={index}>
                    <h2 className="project-name">{project.name}</h2>
                    <p className="project-description">{project.description}</p>
                    <p className="project-technologies"><strong>Tech:</strong> {project.technologies}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;
