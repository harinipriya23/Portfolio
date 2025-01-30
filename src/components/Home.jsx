import React from "react";

const Home = () => {
  return (
    <div className="mx-5 flex h-screen flex-col items-center justify-center p-10 text-center font-montserrat">
      <h1 className="name">Hi, I'm HariniPriya!</h1>
      <h2 className="mx-10 text-[18px] font-bold uppercase text-purple-900 dark:text-gray-300 sm:text-[20px] md:text-[25px]">
        Frontend Developer <br /> React Developer
      </h2>
      <p className="mt-2 w-[300px] px-4 text-center text-[16px] font-medium text-purple-800 dark:text-gray-400 sm:w-[350px] sm:text-[18px] md:w-[400px] md:text-[20px]">
        A creative developer turning visions into engaging digital designs.
      </p>
    </div>
  );
};

export default Home;
