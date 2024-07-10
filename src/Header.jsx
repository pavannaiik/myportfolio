import React, { useState, useEffect } from "react";
import Pdf from "./assets/PavanResume.pdf";
import { Link } from "react-scroll";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      setHasScrolled(currentScrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-transparent shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8 sm:px-8"
        aria-label="Global Navigation"
      >
        <div className="flex-1"></div>
        <div className="flex gap-x-12">
          {["home", "experience","projects", "education", "social"].map(
            (section) => (
              <a key={section}>
                <Link
                  to={section}
                  className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
                  smooth={true}
                  duration={section === "social" ? 1500 : 800}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </a>
            )
          )}
          <a
            href={Pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
