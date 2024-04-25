import React from "react";
import "./css/main.css"; // Import the CSS file where you define the animation
import { HiArrowDown } from "react-icons/hi2";

const CallToAction: React.FC = () => {
  return (
    <div className="calltoaction py-8 section">
      <h1 className="calltoactionh1 gap-2 pt-6 mt-8 font-bold flex justify-center items-center">
        <span className="col1">Hi there! I'm </span>{" "}
        <span className="tex"> Gaurang!</span>
        <span className="wave">👋🏼</span>
      </h1>
      <p className="px-4 font-semibold">
        I'm a Software Engineer, Full Stack developer, A Computer Science
        undergrad, a Hobby Artist, and a Polymath!
      </p>

      <div className="py-4">
        <button className="callbutton callbutton0">
          <a href="#about">Learn More!</a>
        </button>
        <button className="callbutton callbutton1">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/14G50hKsfqaEGSVpsza6BsELfMPH3_rfp/view?usp=sharing"
          >
            View My Resume!
          </a>
        </button>
      </div>
      <div className="arricon flex justify-center">
        <HiArrowDown size={40} />
      </div>
    </div>
  );
};

export default CallToAction;
