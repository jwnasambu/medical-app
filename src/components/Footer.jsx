import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5 space-y-8 md:space-y-0">
        {/* About the Brand */}
        <div className="w-full md:w-1/4">
          <h1 className="text-xl font-semibold pb-4">WellnessVista</h1>
          <p className="text-sm">
            Our team of dedicated doctors specializes in orthopedics, cardiology,
            pediatrics, neurology, dermatology, and more.
          </p>
        </div>

        {/* About Us Links */}
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

        {/* Services Links */}
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

        {/* Contact Info */}
        <div className="w-full md:w-1/4">
          <h1 className="text-xl font-medium pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2 text-sm">
            <Link to="/" spy={true} smooth={true} duration={500}>
              123 Elm Street, Suite 456<br />Springfield, IL 62701, USA
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              support@care.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +123-456-7890
            </Link>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 text-sm border-t border-white/20">
        © Developed by
        <span className="text-hoverColor font-medium"> Champion Programmers</span> | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
