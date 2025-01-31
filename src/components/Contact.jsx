import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";

const Contact = () => {
  const contactInfo = [
    { icon: <PiPhoneCallFill size={28} />, info: "+91 824880 8144" },
    {
      icon: <IoIosMail size={28} />,
      info: "www.harinipriyaarunjunaivel@gmail.com",
    },
    {
      icon: <FaLinkedin size={28} />,
      info: "https://www.linkedin.com/in/harini-priya-arunjunaivel2030/",
    },
    {
      icon: <FaGithub size={28} />,
      info: "https://github.com/harinipriya2030/",
    },
  ];
  return (
    <div id="contact" className="flex h-screen flex-col items-center p-10">
      <p className="text-3xl font-bold text-purple-900 dark:text-gray-200">
        CONTACT ME
      </p>
      <form
        action="https://getform.io/f/bzyyojja"
        method="post"
        className="my-10 flex w-96 flex-col items-center gap-5"
      >
        <div className="space-y-2">
          <p className="contact-heading">Name</p>
          <input type="text" name="name" className="input-box" />
        </div>
        <div className="space-y-2">
          <p className="contact-heading">Email</p>
          <input type="text" name="email" className="input-box" />
        </div>
        <div className="space-y-2">
          <p className="contact-heading">Message</p>
          <textarea type="text" name="message" className="input-box h-36" />
        </div>
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-3 py-2 text-[15px] font-semibold text-white hover:bg-blue-600 dark:bg-emerald-600 dark:hover:bg-emerald-700"
        >
          Send Message
        </button>
        <div className="my-2 flex justify-center gap-5">
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
      </form>
    </div>
  );
};

export default Contact;
