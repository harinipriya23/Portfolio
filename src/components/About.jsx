import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="flex h-screen flex-col items-center justify-center p-10"
    >
      <p className="text-3xl font-bold text-purple-900 dark:text-gray-200">
        ABOUT ME
      </p>
      <div className="grid h-full grid-cols-1 items-center justify-items-center md:mx-10 md:grid-cols-2 md:gap-10">
        <div className="my-5 h-44 w-36 p-1 xs:h-52 xs:w-44 sm:mx-10 sm:h-64 sm:w-52 md:ml-20 md:h-1/2 md:w-[250px] lg:h-[400px] lg:w-[350px]">
          <img
            src="hp.png"
            class="h-full w-full rounded-e-full border-4 border-gray-300 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-500"
          />

          <div className="my-4 flex justify-center gap-5 md:hidden">
            <a
              href="https://www.linkedin.com/in/harini-priya-arunjunaivel2030/"
              target="_blank"
              className="transition-transform duration-500 hover:scale-125"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/harinipriya2030/"
              target="_blank"
              className="transition-transform duration-500 hover:scale-125"
            >
              <FaGithub size={25} />
            </a>
          </div>
        </div>
        <div className="my-4 flex flex-col items-center gap-2 p-2 text-justify text-[14px] xs:mx-10 sm:mx-20 sm:gap-4 sm:text-[16px] md:mx-0 md:text-[16px] lg:text-[18px]">
          <p>
            A creative and technically skilled Frontend Developer specializing
            in React, driven to deliver innovative and impactful digital
            solutions.
          </p>
          <p>
            As a fresher, I have independently worked on several personal
            projects, building a strong foundation in HTML, CSS, Tailwind CSS,
            JavaScript, and React.
          </p>
          <p>
            I am familiar with tools like GitHub and Postman and always eager to
            learn new technologies and frameworks to enhance my craft.
          </p>
          <p>
            I thrive on challenges and am excited to bring my passion for coding
            and problem-solving to real-world applications.
          </p>
          <div className="my-3 hidden gap-5 md:flex">
            <a
              href="https://www.linkedin.com/in/harini-priya-arunjunaivel2030/"
              target="_blank"
              className="transition-transform duration-500 hover:scale-125"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/harinipriya2030/"
              target="_blank"
              className="transition-transform duration-500 hover:scale-125"
            >
              <FaGithub size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
