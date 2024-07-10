import React from "react";
import PavanImage from './assets/Pavan.jpg';
import Lottie from 'lottie-react';
import AnimationData from './assets/DownAnimation.json';
import Fade from "react-reveal/Fade";
import { Link } from 'react-scroll';
import './LandingPage.css'; // Import custom CSS

const LandingPage = ({ isLoggedIn }) => {
  if (!isLoggedIn) return null;

  return (
    <div 
      id="home" 
      className="relative isolate w-screen min-h-screen overflow-hidden py-24 sm:py-32 flex flex-col md:flex-row items-center justify-center bg-[#654321]"
    >
      <ProfileImage src={PavanImage} alt="Profile of PavanKalyan" />
      <ProfileContent />
      <ScrollLink />
    </div>
  );
};

const ProfileImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover object-right md:object-center opacity-95 funky-border ml-6" // Added left margin
  />
);

const ProfileContent = () => (
  <Fade bottom duration={1200}>
    <div className="mx-auto max-w-7xl px-6 lg:px-8 md:ml-16 text-center md:text-left text-white ml-6"> {/* Added left margin */}
      <h2 className="text-4xl font-bold sm:text-6xl">
        Hi <span role="img" aria-label="wave">👋</span>, I'm PavanKalyan.
      </h2>
      <h3 className="text-3xl font-bold sm:text-4xl">
      I'm a Software Developer.
      </h3>
      <p className="mt-6 text-lg leading-8">
        I love building software <span role="img" aria-label="laptop">💻</span>, and solving problems <span role="img" aria-label="light bulb">💡</span>.
      </p>
    </div>
  </Fade>
);

const ScrollLink = () => (
  <Link to="experience" className="font-semibold leading-6 text-gray-100 hover:text-yellow-300 transition-all duration-300" smooth={true} duration={800}>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
      <Lottie animationData={AnimationData} />
    </div>
  </Link>
);

export default LandingPage;
