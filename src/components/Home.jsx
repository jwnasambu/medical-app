import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div
      className="
        min-h-screen 
        flex flex-col 
        justify-center 
        bg-[url('assets/img/home.png')] 
        bg-no-repeat bg-cover 
        opacity-90 
        text-white 
        px-5 lg:px-32
      "
    >
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
        Your health, your life, your choices always in your hands.
        </h1>

        <p>
          At the heart of our mission is the belief that every individual
          deserves the opportunity to make informed health choices.
          Our goal is to simplify this process by offering personalized guidance tailored to your unique needs.
          Whether you’re managing chronic conditions, exploring preventive care options, or making lifestyle changes,
          we are here to support you with tools, resources, and expertise that you can trust.
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
