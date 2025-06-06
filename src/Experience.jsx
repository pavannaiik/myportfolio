import React from "react";
import CGILogo from "./assets/CGILogo.jpg";
import OracleLogo from "./assets/OracleLogo.png";
import MacmillanLogo from "./assets/MacmillanLogo.jpg";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import DownAnimation from "./assets/DownAnimation.json";
import ExperienceAnimation from "./assets/ExperienceAnimation.json";

export default function Experience() {
  return (
    <>
      <div id="experience" className="bg-[#654321] py-24 w-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <Fade bottom duration={1200}>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Experience
                </h2>
                <p className="mt-2 text-lg leading-8 text-white">
                  Years of diverse and enriching professional experiences, each one contributing to the tapestry of my expertise and innovation.
                </p>
              </Fade>
            </div>
            <div className="flex justify-center items-center">
              <Fade bottom duration={1200}>
                <div className="lottie-container">
                  <Lottie animationData={ExperienceAnimation} />
                </div>
              </Fade>
            </div>
          </div>
          <ExperienceCard
            logo={MacmillanLogo}
            company="Macmillan"
            title="Software Developer"
            duration="June 2024 — August 2024"
            location="New York, USA"
            description={[
              "Automated a workflow to publish solution articles from Google Docs to Freshdesk using Spring Boot and AWS S3, reducing manual processing time by 95% and improving content management workflow.",
              "Integrated OpenAI model into the product for publishing the Knowledge Base tickets from Asana portal to Freshdesk chat Help section using Java which boosted user engagement by 30%.",
              "Led a team of four to deliver an intern project in the domain Future of AI for the Book Recommender System combining content-based filtering and collaborative filtering to provide recommendations with average number of clicks per user at 73%."
            ]}
            techStack={["Java", "SpringBoot", "PostgreSQL", "OpenAI", "Google Docs"]}
          />
          <ExperienceCard
            logo={OracleLogo}
            company="Oracle"
            title="Application Engineer II"
            duration="May 2022 - August 2023"
            location="Hyderabad, India"
            description={[
              "Worked on complete software development lifecycle (SDLC) of HCM Celebrate product right from requirements gathering, coding, code review, testing, deploying, bug fixing, and code/API documentation.",
              "Developed PLSQL scripts for distributing reward points to employees on a monthly basis and worked on an Explicit Locking Mechanism (Oracle) for concurrent updates of likes and comments by users.",
              "Optimized SQL queries and database performance in Oracle, achieving a 30% improvement in application performance.",
              "Resolved 95% of production issues swiftly, enhancing product reliability and customer satisfaction."
            ]}
            techStack={["Java", "Oracle DB", "Rest API", "VBCS", "Git", "Kubernetes", "PL/SQL"]}
          />
          <ExperienceCard
            logo={CGILogo}
            company="CGI"
            title="Software Engineer"
            duration="September 2020 - May 2022"
            location="Bengaluru, India"
            description={[
              "Built high-performance, secure, resilient services with clean, well-documented RESTful APIs for the ’Medway’ application based on micro-services architecture in Java using SpringBoot framework containerized with Docker.",
              "Utilizing Apache Kafka, developed a data feed solution that feeds into a dashboard, providing management with daily oversight to track order volumes and processing times.",
              "Implemented automated deployment triggers to staging, streamlining the CI/CD pipeline process, which increased deployment frequency to staging by 40% allowing frequent testing and validation in the staging environment.",
              "Designed relational database schemas and optimized SQL queries for faster data retrieval.",
              "Achieved code coverage of 90% in a TDD environment by writing unit tests using JUNIT5, Mockito."
            ]}
            techStack={["Java", "SpringBoot", "PostgreSQL", "AWS", "RabbitMQ", "R"]}
          />
          <Link
            to="education"
            className="font-semibold leading-6 text-white hover:text-opacity-50"
            smooth={true}
            duration={800}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 mb-8 pt-10">
              <Lottie animationData={DownAnimation} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

const ExperienceCard = ({ logo, company, title, duration, location, description, techStack }) => (
  <Fade bottom duration={1900}>
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-white sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {company} - {title}
        </h3>
        <h4 className="text-white italic">
          {duration} | {location}
        </h4>
        <p className="mt-6 text-base leading-7 text-white">
          {description.map((desc, index) => (
            <span key={`desc-${index}`}>
              {desc}
              <br />
            </span>
          ))}
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-xl font-semibold leading-6 text-white">
            Technology Stack
          </h4>
          <div className="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-white sm:grid-cols-3 sm:gap-6">
          {techStack.map((tech, index) => (
            <li key={`tech-${index}`} className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
              <span className="relative z-10 rounded-full bg-white px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-400">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
          <div className="mx-auto max-w-xs h-full px-8 flex justify-center items-center">
            <img src={logo} alt={`Logo of ${company}`} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </Fade>
);