import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import DownAnimationData from "./assets/DownAnimation.json";
import ExperienceAnimationData from "./assets/ExperienceAnimation.json";
import BrandCollabAI from "./assets/BrandCollabAI.png";
import ChatApplication from "./assets/ChatApplication.jpg";
import TollGateSystem from "./assets/TollGateSystem.jpeg";

export default function Project() {
  return (
    <>
      <div id="projects" className="bg-[#654321] py-24 w-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <Fade bottom duration={1200}>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Projects
                </h2>
                <p className="mt-2 text-lg leading-8 text-white">
                Diverse and impactful projects showcasing my skills in software development, artificial intelligence, and system design. Each project reflects a commitment to innovation, problem-solving, and delivering high-quality solutions.                </p>
              </Fade>
            </div>
            <div className="flex justify-center items-center">
              <Fade bottom duration={1200}>
                <div style={{ width: "300px", height: "250px" }} className="center">
                  <Lottie animationData={ExperienceAnimationData}></Lottie>
                </div>
              </Fade>
            </div>
          </div>
          <ProjectCard
            logo={ChatApplication}
            title="Real-Time Chat Application"
            description={[
              "Architected and implemented a real-time chat application utilizing advanced socket programming techniques, enabling seamless, bidirectional communication between users.",
              "It involved creation of a scalable server-client architecture supporting multiple concurrent connections, and ensuring efficient data transmission and low latency in message delivery."
            ]}
            techStack={["C++", "Client-Server Model", "Network Protocols", "Socket Programming", "TCP/IP Suite"]}
          />
          <ProjectCard
            logo={BrandCollabAI}
            title="BrandCollab AI System"
            description={[
              "Designed a system where brands and influencers can collaborate and find the perfect match for their products and influencers can discover opportunities that align with their personal brand."
            ]}
            techStack={["Semantic Matching Algorithms", "Recommendation System", "Java", "Python", "Flask", "Postgres", "SpringBoot", "ReactJS"]}
          />
          <ProjectCard
            logo={TollGateSystem}
            title="Electronic Toll Gate System"
            description={[
              "Developed a toll gate system to minimize delays on toll roads by collecting tolls without cash and without requiring cars to stop."
            ]}
            techStack={["Python", "OpenCV EAST Text Editor", "Tesseract v4’s LSTM deep learning text recognition algorithm", "Ngrok server","LSTM","Deep Learning"]}
          />
          <ProjectCard
            logo={TollGateSystem}
            title="Shopping Service"
            description={[
              "Developed a shopping service with Java microservices and gRPC",
              "Implemented user and order services, enabling data exchange via gRPC"
            ]}
            techStack={["Java", "Microservices", "gRPC", "H2Database"]}
            githubLink="https://github.com/pavannaiik/shopping-service"
          />
          <Link
            to="education"
            className="font-semibold leading-6 text-white hover:text-opacity-50"
            smooth={true}
            duration={800}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 mb-8 pt-10">
              <Lottie animationData={DownAnimationData}></Lottie>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

const ProjectCard = ({ logo, title, description, techStack, githubLink }) => (
  <Fade bottom duration={1900}>
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-white sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h3>
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
        <ul
          role="list"
          className="mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-white sm:grid-cols-3 sm:gap-6"
        >
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start"
            >
              <span className="relative z-10 rounded-full bg-white px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-400">
                {tech}
              </span>
            </li>
          ))}
        </ul>
        {githubLink && (
          <div className="mt-8">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View on GitHub
            </a>
          </div>
        )}
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
          <div className="mx-auto max-w-xs h-full px-8 flex justify-center items-center">
            <img src={logo} alt={`${title} logo`} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </Fade>
);

