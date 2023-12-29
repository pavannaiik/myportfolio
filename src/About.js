
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
                <p>
                    As a seasoned Application Engineer with a forte in front-end development and system automation, my expertise spans from crafting intricate RESTful services to automating complex workflows. My technical toolkit is equipped with a diverse set of programming languages like Java, Python, and JavaScript, and I'm well-versed in database management and ORM technologies.

                    At Oracle, I've streamlined software development processes, notably automating API testing to cut down regression testing time drastically. My stint at CGI Inc was marked by optimizing MySQL databases and leveraging RabbitMQ to enhance system efficiency. My commitment to security and performance is demonstrated through the successful implementation of OAuth 2.0 and cache strategies that significantly improved application responsiveness.

                    I take pride in my project portfolio, which includes an AI-powered BrandCollab System, a Smart Gardening System utilizing IoT, and an innovative Electronic Toll Gate System using advanced text recognition algorithms.

                    Continuously upskilling, I hold certifications in Apache Kafka and cloud-native technologies. I'm eager to apply my analytical and technical skills to solve challenges and create impactful solutions.</p>
                <p>Currently, I am persuing master at University at Buffalo SUNY in Computer Science .</p>
                {/* Update this part: wrap the button in an anchor tag */}
                <a href='PavanKalyan_Resume.pdf' target="_blank" rel="noopener noreferrer" className="resume-link">
                    <button className="resume-button">Check out my resume!</button>
                </a>
            </div>
        </div>
    );
}

export default About;

