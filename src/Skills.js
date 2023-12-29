import React from 'react';
import './Skills.css'; // Make sure to create a corresponding CSS file

const Skills = () => {
    const skillCategories = [
        {
            category: 'Programming Languages',
            skills: ['C', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript', 'JSON', 'Python', 'R', 'SQL']
        },
        {
            category: 'Database & ORM',
            skills: ['RDBMS (MySQL, Oracle)', 'Hibernate', 'Spring Data JPA', 'NoSQL (MongoDB)']
        },
        {
            category: 'Messaging Systems',
            skills: ['RabbitMQ', 'Pub/Sub Architecture']
        },
        {
            category: 'AI/ Data Science',
            skills: ['Hadoop', 'MapReduce', 'Pandas', 'Scikit-Learn', 'NumPy', 'Pytorch', 'TensorFlow', 'PySpark']
        },
        {
            category: 'Frameworks/APIs/Cloud',
            skills: ['Spring MVC', 'REST APIs', 'Multithreading', 'Kafka', 'AWS', 'JUNIT5', 'Docker', 'Flask']
        },
        {
            category: 'Project/Version Control',
            skills: ['Agile', 'Scrum', 'Atlassian Jira', 'Confluence', 'Git', 'CI/CD', 'Jenkins']
        },
        {
            category: 'Certifications',
            skills: ['Apache Kafka', 'Cloud Native Development with Node.js, Docker, and Kubernetes']
        }
    ];

    return (
        <div className="skills-container">
            <h1 className="skills-title">SKILLS</h1>
            {skillCategories.map((category, index) => (
                <div className="skill-category" key={index}>
                    <h2 className="category-title">{category.category}</h2>
                    <ul className="skills-list">
                        {category.skills.map((skill, skillIndex) => (
                            <li className="skill" key={skillIndex}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Skills;
