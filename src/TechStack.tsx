import React from "react";
import "./css/main.css";
import { SiSpringboot } from "react-icons/si";


const TechStack: React.FC = () => {
  return (
    <div className="flex flex-col mt-4 gap-6 techstack section" id="about">
      <h1 className="isans text-center mt-2 font-bold heading ">My Tech Stack</h1>
      <div className="">
        <h2 className="isans text-center font-bold text-2xl mt-4">Frontend</h2>
        <div className="mt-4 flex justify-center align-items gap-4 frontend">
          <img
            className="size"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="html5"
          />

          <img
            className="size"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            alt="css3"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            className="size"
            alt="javascript"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            className="size"
            alt="typescript"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            className="size"
            alt="react"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            className="size"
            alt="tailwind"
          />
        </div>
      </div>
      <div>
        <h2 className="isans text-center font-bold text-2xl mt-4">Backend</h2>
        <div className="mt-4 gap-4 flex justify-center align-items backend">
          <img
            className="size"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            alt="node"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
            className="size"
            alt="express"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
            className="size"
            alt="mongo"
          />

          <SiSpringboot size={40} className="size spring"/>


          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            className="size"
            alt="postgres"
          />
        </div>
      </div>
      <div>
        <h2 className="isans text-center font-bold text-2xl mt-4">Other</h2>
        <div className="other mt-4 gap-4 flex justify-center align-items ">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            className="size"
            alt="java"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            className="size"
            alt="python"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            className="size"
            alt="git"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            className="size"
            alt="github"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
            className="size"
            alt="postman"
          />
          
        </div>
      </div>
    </div>
  );
};

export default TechStack;
