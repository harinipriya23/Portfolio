import React from "react";
import { useEffect, useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { ImHome } from "react-icons/im";
import { IoPersonSharp } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { PiCodeFill } from "react-icons/pi";
import { RiMessage2Fill } from "react-icons/ri";

export const navLinks = [
  {
    label: "home",
    to: "",
    icon: <ImHome />,
  },
  {
    label: "about",
    to: "about",
    icon: <IoPersonSharp />,
  },
  {
    label: "skills",
    to: "skills",
    icon: <PiCodeFill />,
  },
  {
    label: "projects",
    to: "projects",
    icon: <AiFillProject />,
  },
  {
    label: "contact",
    to: "contact",
    icon: <RiMessage2Fill />,
  },
];

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [nav, setNav] = useState("");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  function handleSwitchTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <ul className="fixed flex h-full w-14 flex-col items-center shadow-gray-500 transition-all duration-150 ease-in-out dark:shadow-white xsm:w-16 sm:shadow-md md:w-20">
      <span
        onClick={() => {
          setNav(!nav);
        }}
        className="my-5 flex sm:hidden"
      >
        <BiMenuAltLeft size={30} />
      </span>
      {navLinks.map(({ label, to, icon }) => (
        <li
          key={label}
          className="group mt-8 hidden flex-col items-center justify-center sm:flex"
        >
          <a href={to} className="icon">
            {icon}
          </a>
          <span className="label group-hover:scale-75 group-hover:opacity-100">
            {label}
          </span>
        </li>
      ))}
      {nav &&
        navLinks.map(({ label, to, icon }) => (
          <li
            key={label}
            className="group mt-8 flex flex-col items-center justify-center sm:hidden"
          >
            <a href={to} className="icon">
              {icon}
            </a>
            <span className="label group-hover:scale-75 group-hover:opacity-100">
              {label}
            </span>
          </li>
        ))}

      <li
        className="absolute bottom-10 hover:scale-105"
        onClick={handleSwitchTheme}
      >
        {theme === "dark" ? (
          <MdLightMode size={24} />
        ) : (
          <MdDarkMode size={24} />
        )}
      </li>
    </ul>
  );
};

export default Navbar;
