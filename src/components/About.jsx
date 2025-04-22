import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center gap-5 px-5 pt-24 lg:px-32 lg:pt-16">
      
      {/* Text Section */}
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-left">About Us</h1>
        
        <p className="text-justify lg:text-left">
          <strong>Empowerment:</strong> We believe in giving you the tools and information to take charge of your health journey.
          You are in control of your well-being, and we are here to help you make informed choices.
        </p>

        <p className="text-justify lg:text-left">
          <strong>Trust:</strong> As your trusted health partner, we strive to build a relationship based on trust and reliability.
          We offer evidence-based resources, ensuring you always have access to accurate and up-to-date information
        </p>

        <p className="text-justify lg:text-left">
          <strong>Partnership:</strong> We’re not just here to provide information—we’re here to walk with you every step of the way.
          Your health journey is unique, and we’re committed to being your supportive partner as you work towards a vibrant life.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-3/4">
        <img src={img} alt="About us" className="rounded-lg" />
      </div>
    </div>
  );
};

export default About;
