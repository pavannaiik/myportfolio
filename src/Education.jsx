import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Lottie from "lottie-react";
import UBlogo from "./assets/UBlogo.png";
import NITRourkela from "./assets/NITRourkela.png";
import UpAnimationData from "./assets/UpAnimation.json";
import EducationAnimationData from "./assets/EducationAnimation.json";
import SocialMediaAnimation from "./assets/SocialMediaAnimation.json";
import InstagramAnimation from "./assets/InstagramAnimation.json";
import GithubAnimation from "./assets/GithubAnimation.json";
import MailAnimation from "./assets/MailAnimation.json";
import LinkedinAnimation from "./assets/LinkedInAnimation.json";

const courses = [
  "Analysis of Algorithms",
  "Operating Systems",
  "Data Intensive Computing",
  "Computer Security",
  "Technological Entrepreneurship",
  "Modern Network Concepts",
  "Intro to Machine Learning",
  "Deep Learning",
  "Data Models and Query Language",

  "Data Structures and Algorithms",
  "Machine Intelligence",
  "Information Theory and Coding",
  "Soft Computing",
  "Data Communication Networks",
  "Embedded Systems"
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/gpavanka/",
    animationData: LinkedinAnimation,
  },
  {
    href: "mailto:pavankgugulot@outlook.com",
    animationData: MailAnimation,
  },
  {
    href: "https://www.instagram.com/pavankalyanfr/",
    animationData: InstagramAnimation,
  },
  {
    href: "https://github.com/pavannaiik",
    animationData: GithubAnimation,
  }
];

const Education = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCourses = (courses) =>
    courses.map((course, index) => (
      <Fade bottom duration={1100 + index * 100} key={index}>
        <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
          <span className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-customGradient-400">
            {course}
          </span>
        </li>
      </Fade>
    ));

  const renderSocialLinks = () =>
    socialLinks.map(({ href, animationData }, index) => (
      <a href={href} target="_blank" rel="noopener noreferrer" className="mx-4" key={index}>
        <div className="font-semibold leading-6 text-customGradient-200 hover:text-opacity-50 flex justify-center items-center">
          <div style={{ width: "50px", height: "50px" }}>
            <Lottie animationData={animationData}></Lottie>
          </div>
        </div>
      </a>
    ));

  return (
    <div id="education" className="bg-[#654321] py-24 w-screen" style={{ paddingTop: "150px" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            <Fade bottom duration={1200}>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Education
              </h2>
              <p className="mt-2 text-lg leading-8 text-white">
                Built a strong foundation through academic excellence to drive professional success.
              </p>
            </Fade>
          </div>
          <div className="flex justify-center items-center">
            <Fade bottom duration={1200}>
              <div style={{ width: "400px", height: "250px" }} className="center">
                <Lottie animationData={EducationAnimationData}></Lottie>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <section className="relative isolate overflow-hidden bg-[#654321] px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl pb-10">
          <Fade bottom duration={1500}>
            <img src={UBlogo} alt="University at Buffalo SUNY" className="mx-auto h-14" />
          </Fade>
          <figure className="mt-10">
            <Fade bottom duration={1500}>
              <h3 className="text-center text-xl text-white font-bold leading-8">
                MS in Computer Science
              </h3>
              <h3 className="text-center text-l text-white font-bold leading-8">
                University at Buffalo SUNY, New York | August 2023 - December 2024
              </h3>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-xl font-semibold leading-6 text-white">
                  Coursework
                </h4>
                <div className="h-px flex-auto bg-white"></div>
              </div>
            </Fade>
            <ul role="list" className="mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-white sm:grid-cols-3 sm:gap-6">
              {renderCourses(courses.slice(0, 9))}
            </ul>
          </figure>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-4xl pt-10">
          <Fade bottom duration={1500}>
            <img src={NITRourkela} alt="National Institute of Technology Rourkela" className="mx-auto h-16" />
          </Fade>
          <figure className="mt-10">
            <Fade bottom duration={1500}>
              <h3 className="text-center text-xl text-white font-bold leading-8">
                B.Tech in Computer Engineering
              </h3>
              <h3 className="text-center text-l text-white font-bold leading-8">
                National Institute of Technology Rourkela, Rourkela India | August 2016 - July 2020
              </h3>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-xl font-semibold leading-6 text-white">
                  Coursework
                </h4>
                <div className="h-px flex-auto bg-white"></div>
              </div>
            </Fade>
            <ul role="list" className="mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-white sm:grid-cols-3 sm:gap-6">
              {renderCourses(courses.slice(9))}
            </ul>
          </figure>
        </div>
      </section>

      <div id="social" className="font-semibold leading-6 text-white hover:text-opacity-50 flex justify-center items-center">
        <div style={{ width: "200px", height: "200px" }}>
          <Lottie animationData={SocialMediaAnimation}></Lottie>
        </div>
      </div>
      <div className="flex justify-center items-center pb-10">
        {renderSocialLinks()}
      </div>
      {showScrollButton && (
        <div className="flex justify-end fixed bottom-0 right-0 mr-4 mb-4">
          <button onClick={scrollToTop} className="w-20 h-20">
            <Lottie animationData={UpAnimationData} className="h-20 w-20"></Lottie>
          </button>
        </div>
      )}
    </div>
  );
};

export default Education;
