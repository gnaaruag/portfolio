import React from "react";
import "./css/main.css";

const Experience: React.FC = () => {
  return (
    <div className="isans  mb-4 card" id="experience">
      <h2 className="text-2xl font-bold text-center heading mt-4 px-2 mb-8 ">
        Experience
      </h2>
      <div className="flex flex-col gap-4 mx-2 mt-4 mb-4">
        {/* First Card Component */}
        <div className="p-4 bg-white rounded-lg leading-none flex flex-col  justify-start items-left space-x-6 component">
          {/* SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          {/* Experience Details */}
          <div className="flex-1">
            <h3 className="text-xl mt-2 mb-2">Full Stack Development Intern</h3>
            <h3 className="mb-2">Nov 2023 - Present.</h3>
            <p className="mb-2">BuildIT Labs</p>
            <ul className="list-disc mb-4">
              <li className="mb-1">Implemented new features and optimized user experience.</li>
              <li className="mb-1">
                Built scalable backend architectures, ensuring optimal
                performance.
              </li>
              <li className="mb-1">
                Significantly contributed to the development of high-traffic
                applications, demonstrating a strong grasp of software
                engineering principles and adeptly managing the software
                development lifecycle.
              </li>
            </ul>
            <a
              href="https://github.com/BuildIT-IARE/BuildIT/pulls?q=is%3Apr+is%3Aclosed+author%3Agnaaruag"
              className="block text-indigo-400 transition duration-200"
              target="_blank"
            >
              Learn More →
            </a>
          </div>
        </div>
        {/* Second Card Component */}
        <div className="p-4 w-full bg-white rounded-lg leading-none flex items-top justify-start space-x-6 component">
          {/* SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
            />
          </svg>

          {/* Experience Details */}
          <div className="flex-1">
            <h3 className="text-xl mb-2 mt-2">Co-Lead: Content Team</h3>
            <h3 className="mb-1">Nov 2022 - Jan 2023.</h3>
            <p className="mb-1">TEDx IARE</p>
            <ul className="list-disc mb-4">
              <li className="mb-1">
                Led a team and oversaw the content and media being put out to
                promote TEDx
              </li >
              <li className="mb-1">
                Co-ordinated and helped generate content strategies for event
                marketing
              </li>
              <li className="mb-1">
                Oversaw on-stage activities, including speaker and host,
                ensuring adherence to event schedule for seamless execution and
                engaging audience experience.
              </li>
            </ul>
            <a
              href="https://github.com/BuildIT-IARE/BuildIT/pulls?q=is%3Apr+is%3Aclosed+author%3Agnaaruag"
              className="block text-indigo-400 transition duration-200"
              target="_blank"
            >
              Learn More →
            </a>
          </div>
        </div>
        {/* Third Card Component */}
        <div className=" p-4  bg-white rounded-lg leading-none flex items-top justify-start space-x-6 component">
          {/* SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
            />
          </svg>

          {/* Experience Details */}
          <div className="flex-1">
            <h3 className="text-xl mt-2 mb-2">Lead: Tech Team, Content Team</h3>
            <h3 className="mb-1">Jan 2023 - Present.</h3>
            <p className="mb-1">E-Cell IARE</p>
            <ul className="list-disc mb-4">
              <li className="mb-1">
                Oversaw Cell communication with members and outside world.
              </li>
              <li className="mb-1">
                Helped lead the Cell to a 4th place finish in the National
                Entrepreneurship Challenge, IIT Bombay
              </li>
              <li className="mb-1">Helped foster Entrepreneurial spirit in the college</li>
            </ul>
            <a
              href="https://www.instagram.com/ecelliare/"
              className="block text-indigo-400 transition duration-200"
              target="_blank"
            >
              Learn More→
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
