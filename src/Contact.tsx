import React from "react";
import "./css/main.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import Email from "./Email";

const Contact: React.FC = () => {
  return (
    <div className="isans" id="contact">
      <h3 className="heading text-center mb-8">
        I'm always down to collaborate .
      </h3>
      <p className="text-center text-2xl">Here's where you can find me.</p>
      <div className="flex justify-center items-start mx-4 mt-4 mb-4 gap-4 socials">
        <div className="flex justify-center flex-col items-center mt-4  sm:w-full text-center ">
          Find me on twitter
          <a
            className="flex justify-center items-center"
            href="https://twitter.com/gnaaruag"
            target="_blank"
          >
            <FaSquareXTwitter size={20} />
            <span className="text-indigo-500">/gnaaruag</span>
          </a>
        </div>
        <div className="flex justify-center flex-col items-center mt-4  sm:w-full text-center ">
          Find me on GitHub
          <a
            className="flex justify-center items-center"
            href="https://github.com/gnaaruag"
            target="_blank"
          >
            <FaGithub size={20} />

            <span className="text-indigo-500">/gnaaruag</span>
          </a>
        </div>
        <div className="flex justify-center flex-col items-center mt-4  md:w-full text-center">
          Find me on instagram at
          <a
            className="flex justify-center items-center"
            href="https://instagram.com/gnaaruag"
            target="_blank"
          >
            <FaInstagram size={20} />
            <span className="text-indigo-500">/gnaaruag</span>
          </a>
        </div>
        <div className="flex justify-center flex-col items-center sm:w-full mt-4  text-center">
          Also here's my art page.
          <a
            className="flex justify-center items-center"
            href="https://www.instagram.com/vertigo.poetry/"
            target="_blank"
          >
            <FaInstagram size={20} />
            <span className="text-indigo-500">/vertigo.poetry</span>
          </a>
        </div>
      </div>

      <h4 className="text-2xl text-center mt-8">
        Alternatively, Send me a message, and I'll get back to you as soon as I
        can
      </h4>
      <Email />
    </div>
  );
};

export default Contact;
