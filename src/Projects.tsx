import React from "react";
import "./css/main.css";

const Projects: React.FC = () => {
  return (
    <div className="isans  mb-4 card" id="experience">
      <h2 className=" font-bold text-center heading  px-2 mb-8 ">
        Side Projects
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
          {/* Projects Details */}
          <div className="flex-1">
            <h3 className="text-xl mt-2 mb-2">Learning Management System</h3>
            <p className="mt-2 mb-2">
              A multi-user learning management system facilitating seamless
              management of courses, and user interactions for an enhanced
              educational experience.
            </p>
            <div className="tags flex gap-2 flex-wrap">
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                NodeJs
              </span>
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                ExpressJs
              </span>
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                PostgreSQL
              </span>
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                Frontend Templating
              </span>
            </div>
            <a
              href="https://github.com/gnaaruag/lms-project"
              className="pt-2 block text-indigo-400 transition duration-200"
              target="_blank"
            >
              View Project →
            </a>
          </div>
        </div>
        {/* Second Card Component */}

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
          {/* Projects Details */}
          <div className="flex-1">
            <h3 className="text-xl mt-2 mb-2">Full Stack Todo Application</h3>
            <p className="mt-2 mb-2">
              A Todo List productivity application created using Node.js,
              PostgreSQL, and frontend templating, allowing multiple users to
              manage todo lists and tasks efficiently.
            </p>
            <div className="tags flex gap-2 flex-wrap">
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                NodeJs
              </span>
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                ExpressJs
              </span>
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                PostgreSQL
              </span>
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                Frontend Templating
              </span>
            </div>
            <a
              href="https://github.com/gnaaruag/todo-app"
              className="pt-2 block text-indigo-400 transition duration-200"
              target="_blank"
            >
              View Project →
            </a>
          </div>
        </div>
        {/* Third Card Component */}
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
          {/* Projects Details */}
          <div className="flex-1">
            <h3 className="text-xl mt-2 mb-2">
              Full Stack Blogging Application
            </h3>
            <p className="mt-2 mb-2">
              A blogging app built with Node.js and MongoDB ODM and frontend
              templating, featuring an admin interface for content creation and
              user interaction, enabling likes and comments on posts.
            </p>
            <div className="tags flex gap-2 flex-wrap">
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                NodeJs
              </span>
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                ExpressJs
              </span>
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                MongoDB
              </span>
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                Frontend Templating
              </span>
            </div>
            <a
              href="https://github.com/gnaaruag/fs-blog-app"
              className="pt-2 block text-indigo-400 transition duration-200"
              target="_blank"
            >
              View Project →
            </a>
          </div>
        </div>
        {/* Fourth Card Component */}
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
          {/* Projects Details */}
          <div className="flex-1">
            <h3 className="text-xl mt-2 mb-2">
              Findone | A personal finance management application 
              
            </h3>
            <p className="mt-2 mb-2">
              An application for a user to manage their finances. Manage
              money effortlessly  with a user-friendly
              webapp. Helps user stay organized and track expenses  for better
              financial control.
            </p>
            <div className="tags flex gap-2 flex-wrap">
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                NodeJs
              </span>
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                ExpressJs
              </span>
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                MongoDB
              </span>
              <span className="bg-gray-200 p-1 font-sm my-2 rounded-md">
                Frontend Templating
              </span>
            </div>
            <a
              href="https://github.com/gnaaruag/petty-cash-book"
              className="pt-2 block text-indigo-400 transition duration-200"
              target="_blank"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
