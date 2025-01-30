import React from "react";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const technicalSkills = [
    {
      id: 1,
      src: "html.png",
      shadow: "shadow-[#E34F26]",
      bgColor:
        "from-[#FECACA] via-[#F87171] via-[#FB7185] via-[#9B2C2C] to-[#7F1D1D]",
    }, // Light to Dark Red
    {
      id: 2,
      src: "css.png",
      shadow: "shadow-[#1572B6]",
      bgColor:
        "from-[#BFDBFE] via-[#93C5FD] via-[#60A5FA] via-[#1E40AF] to-[#1E3A8A]",
    }, // Light to Dark Blue
    {
      id: 3,
      src: "javascript.png",
      shadow: "shadow-[#F7DF1E]",
      bgColor: "from-[#FDE68A] via-[#FBBF24] via-[#F59E0B] to-[#B45309]",
    }, // Light to Dark Yellow
    {
      id: 4,
      src: "tailwind.png",
      shadow: "shadow-[#38BDF8]",
      bgColor: "from-[#B3E5FC] via-[#03A9F4] via-[#0288D1] to-[#01579B]",
    }, // Light to Dark Cyan
    {
      id: 5,
      src: "react.png",
      shadow: "shadow-[#61DAFB]",
      bgColor: "from-[#BEE3F8] via-[#61DAFB] via-[#4C51BF] to-[#1D4ED8]",
    }, // Light to Dark Blue (React)
    {
      id: 6,
      src: "node.png",
      shadow: "shadow-[#339933]",
      bgColor: "from-[#A7F3D0] via-[#34D399] via-[#10B981] to-[#065F46]",
    }, // Light to Dark Green
    {
      id: 7,
      src: "vscode.png",
      shadow: "shadow-[#007ACC]",
      bgColor: "from-[#B3D9FF] via-[#1E90FF] via-[#1C6BD8] to-[#004A80]",
    }, // Light to Dark Blue (VSCode)
    {
      id: 8,
      src: "postman.png",
      shadow: "shadow-[#FF6C37]",
      bgColor: "from-[#FFEDD5] via-[#FF9C67] via-[#FF7F32] to-[#9F4D4D]",
    }, // Light to Dark Orange
    {
      id: 9,
      src: "github.png",
      shadow: "dark:bg-gray-600 dark:shadow-gray-500 shadow-[#181717]",
      bgColor: "from-[#2F3336] via-[#4B5563] via-[#6B7280] to-[#1F2937]",
    }, // Light to Dark Gray
  ];
  return (
    <div className="flex h-screen flex-col items-center p-10">
      <p className="text-3xl font-bold text-purple-900 dark:text-gray-200">
        TECHNICAL SKILLS
      </p>
      <ul className="mx-10 my-5 grid grid-cols-2 items-center justify-items-center gap-5 xs:grid-cols-3 xs:gap-10 sm:mt-10 sm:gap-8 md:gap-10 lg:grid-cols-4 xl:grid-cols-5">
        {technicalSkills.map(({ id, src, shadow, bgColor }) => (
          <li
            key={id}
            className={`group relative flex h-20 w-20 items-center justify-center rounded-full xs:h-24 xs:w-24 sm:h-36 sm:w-36 md:h-40 md:w-40`}
          >
            <div
              className={`absolute inset-2 -z-10 shadow-md blur-[10px] ${shadow} ${bgColor} h-16 w-16 animate-slow-spin rounded-full bg-radial-gradient-to-top transition-all duration-1000 xs:h-20 xs:w-20 sm:h-32 sm:w-32 md:h-36 md:w-36`}
            ></div>
            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-radial-gradient from-gray-300 to-white transition-all duration-1000 group-hover:scale-110 dark:from-gray-600 dark:to-black sm:h-[120px] sm:w-[120px] md:h-[138px] md:w-[138px]">
              <img
                src={src}
                alt="Skill Icon"
                className="h-12 w-12 object-contain transition-all duration-500 group-hover:scale-75 sm:h-20 sm:w-20 md:h-24 md:w-24"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
