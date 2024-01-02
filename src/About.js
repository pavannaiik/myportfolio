import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="profile-picture-container">
                <img src='pk_image.jpg' alt="Profile" className="profile-picture"/>
            </div>
            <div className="about-content">
                <h1>About Me.</h1>
                <ul>
                    <li>Software developer with expertise in back-end development and system automation.</li>
                    <li>Skilled in crafting intricate RESTful services and automating complex workflows.</li>
                    <li>Proficient in a diverse set of programming languages including Java, Python, and JavaScript.</li>
                    <li>Well-versed in database management and ORM technologies.</li>
                    <li>Streamlined software development processes at Oracle, notably in automating API testing to reduce regression testing time drastically.</li>
                    <li>Optimized MySQL databases and leveraged RabbitMQ to enhance system efficiency at CGI Inc.</li>
                    <li>Implemented OAuth 2.0 and cache strategies, improving application responsiveness and security.</li>
                    <li>Developed a project portfolio including an AI-powered BrandCollab System, a Smart Gardening System utilizing IoT, and an Electronic Toll Gate System using advanced text recognition algorithms.</li>
                    <li>Continuously upskilling with certifications in Apache Kafka and cloud-native technologies.</li>
                    <li>Eager to apply analytical and technical skills to solve challenges and create impactful solutions.</li>
                    <li>Currently pursuing a master's degree in Computer Science at the University at Buffalo, SUNY.</li>
                </ul>
                <a href='PavanKalyan_Resume.pdf' target="_blank" rel="noopener noreferrer" className="resume-link">
                    <button className="resume-button">Check out my resume!</button>
                </a>
            </div>
        </div>
    );
}

export default About;
