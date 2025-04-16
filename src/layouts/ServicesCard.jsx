import React from "react";

const ServicesCard = ({ icon, title }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-2 lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_8px_3px_8px] rounded-lg cursor-pointer hover:lg:translate-y-6 transition duration-300 ease-in-out">
      <div className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
        {icon}
      </div>
      <h1 className="font-semibold text-lg">{title}</h1>
      <p>
        We offer a comprehensive range of medical services designed to meet the
        diverse healthcare needs of our community.
      </p>
      <h3 className="text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;
