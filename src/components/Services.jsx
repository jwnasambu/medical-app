import React from 'react';
import Button from '../layouts/Button';
import ServicesCard from '../layouts/ServicesCard';
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-backgroundColor" />;
  const icon2 = <MdHealthAndSafety size={35} className="text-backgroundColor" />;
  const icon3 = <FaHeartbeat size={35} className="text-backgroundColor" />;

  return (
    <section className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">
          We offer a comprehensive range of medical services designed to meet the diverse healthcare needs of our community.
        </p>
        <div className="mt-6">
          <Button title="See services" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServicesCard icon={icon1} title="Lab Test" />
        <ServicesCard icon={icon2} title="Health Check" />
        <ServicesCard icon={icon3} title="Heart Health" />
      </div>
    </section>
  );
};

export default Services;
