import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: "fooddelivery.png",
      name: "Restaurent App",
      code: "https://github.com/Harinipriya2030/Restaurant",
    },
    {
      id: 2,
      src: "weather.png",
      name: "Weather App",
      code: "https://github.com/Harinipriya2030/WeeklyForecast",
    },
    {
      id: 3,
      src: "foodrecipe.png",
      name: "Food Recipe App",
      code: "https://github.com/Harinipriya2030/Food-Recipe-Management",
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex h-screen flex-col items-center p-5">
      <p className="text-3xl font-bold text-purple-900 dark:text-gray-200">
        PROJECTS
      </p>
      <div className="my-5 flex w-full max-w-4xl flex-col flex-wrap items-center justify-center gap-8 xs:gap-10 md:mx-5 md:my-10 lg:flex-row lg:gap-12">
        {projects.map(({ id, src, name, code }) => (
          <div
            key={id}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className={`group relative h-44 w-64 overflow-hidden rounded-lg border-2 text-white shadow-sm shadow-gray-200 transition-all duration-500 hover:scale-110 dark:border-blue-400 sm:w-72 md:w-80 lg:h-52 lg:${
              hovered === id ? "w-4/5" : "w-1/5"
            }`}
          >
            {/* Image */}
            <img
              src={src}
              alt={name}
              className="h-full w-full transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay with Project Name */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <p className="text-xl font-bold">{name}</p>
              <a
                target="_blank"
                className="duration-400 rounded-md bg-gradient-to-l from-blue-400 to-gray-900 px-4 py-1 text-[14px] font-semibold uppercase tracking-wide shadow-lg transition-transform hover:scale-110"
                href={code}
              >
                View code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
