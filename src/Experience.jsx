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
                <div style={{ width: "300px", height: "250px" }} className="center">
                  <Lottie animationData={ExperienceAnimation}></Lottie>
                </div>
              </Fade>
            </div>
          </div>
          <ExperienceCard
            logo={MacmillanLogo}
            company="Macmillan"
            title="Software Developer Intern"
            duration="June 2024 — August 2024"
            location="New York, USA"
            description={[
              "Developed and automated a workflow to publish solution articles from Google Docs to Freshdesk, reducing manual processing\
              time by 60% using Python and Django by integrating Freshdesk API and Google Doc API, improving content management\
              by 80%", "Integrated Google Gemini model into the product for publishing the Knowledge Based tickets from Asana portal to Freshdesk\
              chat Help section using Python and AI/ML which boosted user engagement by 30%",
              "Participated in an intern project addressing current publishing-related challenges."
            ]}
            techStack={["Python", "Django", "Flask", "Google Gemini","Postgres"]}
          />
          <ExperienceCard
            logo={OracleLogo}
            company="Oracle"
            title="Application Engineer II"
            duration="May 2022 - August 2023"
            location="Hyderabad, India"
            description={[
              "Led complete SDLC of HCM Celebrate product, improving data consistency to 100%.",
              "Implemented Under Budget Restriction functionality, improving budget adherence by 80%.",
              "Developed automation frameworks, reducing regression testing time by 70%."
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
              "Built and maintained RESTful services for 'Medway' application, improving system performance.",
              "Enhanced SQL query performance by 75% through collaboration with DBAs.",
              "Implemented Kafka for real-time logging, improving system monitoring by 90%."
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
              <Lottie animationData={DownAnimation}></Lottie>
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
            <span key={index}>
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
            <li key={index} className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
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
            <img src={logo} alt={`${company} logo`} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </Fade>
);
