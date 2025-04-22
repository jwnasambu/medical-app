import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/4">
          <h1 className="text-xl font-semibold pb-4">St. Julian clinic.</h1>
          <p className="text-sm">
            Our clinics offer a wide range of services to address all your healthcare needs under one roof i.e.
            Emergency Care, Dental Care, Physical Therapy & Rehabilitation e.t.c
          </p>
        </div>

        <div>
          <h1 className="text-xl font-medium pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-2">
            {["about", "services", "doctors"].map((section) => (
              <Link
                key={section}
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-hoverColor transition-all cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h1 className="text-xl font-medium pb-4 pt-5 md:pt-0">Services</h1>
          <nav className="flex flex-col gap-2">
            {["Lab Test", "Health Check", "Heart Health"].map((service) => (
              <Link
                key={service}
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-hoverColor transition-all cursor-pointer"
              >
                {service}
              </Link>
            ))}
          </nav>
        </div>

        <div className="w-full md:w-1/4">
          <h1 className="text-xl font-medium pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2 text-sm">
            <Link to="/" spy={true} smooth={true} duration={500}>
              Makerere Hill road, opp Ham Towers,
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              info@stjulianclinic.org,
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +256-089-456-890
            </Link>
          </nav>
        </div>
      </div>

       <div className="text-center py-4 text-sm border-t border-white/20">
          © 2025 <span className="text-hoverColor font-medium">St. Julian Clinic</span> | All rights reserved
       </div>

    </footer>
  );
};

export default Footer;
