import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 0,
      src: "dash.png",
      name: "Healthcare Dashboard",
      code: "https://github.com/harinipriya23/Dashboard-Master",
      demo: "https://dashboard-master-project.netlify.app/",
    },
    {
      id: 1,
      src: "fooddelivery.png",
      name: "Restaurent App",
      code: "https://github.com/Harinipriya2030/Restaurant",
      demo: "https://restaurant-fooddelivery.netlify.app/",
    },
    {
      id: 2,
      src: "weather.png",
      name: "Weather App",
      code: "https://github.com/Harinipriya2030/WeeklyForecast",
      demo: "https://weekly-weather-forecast.netlify.app/",
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
    <div id="projects" className="flex h-full flex-col items-center p-5">
      <p className="text-3xl font-bold text-purple-900 dark:text-gray-200">
        PROJECTS
      </p>
      <div className="my-5 grid grid-cols-1 gap-10 xs:gap-10 sm:grid-cols-2 md:mx-5 md:my-10 lg:gap-12">
        {projects.map(({ id, src, name, code, demo }) => (
          <div
            key={id}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className={`group relative h-44 w-64 overflow-hidden rounded-lg border-2 text-white shadow-sm shadow-gray-200 transition-all duration-500 hover:scale-110 dark:border-gray-400 lg:h-56 lg:w-80 lg:${
              hovered === id ? "w-3/5" : "w-1/5"
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
              <div className="flex gap-5">
                <a
                  target="_blank"
                  className="duration-400 rounded-md bg-gray-900 px-4 py-1 text-[14px] font-semibold uppercase tracking-wide shadow-lg transition-transform hover:scale-110 dark:bg-slate-900"
                  href={code}
                >
                  code
                </a>{" "}
                {!demo ? (
                  ""
                ) : (
                  <a
                    target="_blank"
                    className="duration-400 rounded-md bg-gray-900 px-4 py-1 text-[14px] font-semibold uppercase tracking-wide shadow-lg transition-transform hover:scale-110 dark:bg-slate-900"
                    href={demo}
                  >
                    DEMO
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
