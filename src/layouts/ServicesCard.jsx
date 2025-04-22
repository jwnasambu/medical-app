import React from "react";

const ServicesCard = ({ icon, title }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer transition duration-300 ease-in-out lg:hover:-translate-y-6">
      
      {/* Icon container */}
      <div className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
        {icon}
      </div>

      {/* Title */}
      <h1 className="font-semibold text-lg">
        {title}
      </h1>

      {/* Description */}
      <p className="text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        praesentium asperiores unde veniam, perspiciatis neque!
      </p>

      {/* Learn more link */}
      <h3 className="text-backgroundColor hover:text-[#ade9dc] cursor-pointer transition duration-300 ease-in-out">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;
