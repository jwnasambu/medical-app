import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => setMenu(prev => !prev);
  const closeMenu = () => setMenu(false);
  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => setShowForm(false);

  return (
    <div className="fixed w-full z-10 text-white">
      <div className="flex justify-between items-center p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        
        {/* Logo */}
        <div className="cursor-pointer">
          <Link to="home" spy={true} smooth={true} duration={500}>
            <h1 className="text-2xl font-semibold">WellnessVista.</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-lg font-medium">
          {["home", "about", "services", "doctors", "blog"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer capitalize"
            >
              {section === "about" ? "About Us" : section}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex">
          <button
            onClick={openForm}
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={28} onClick={toggleMenu} />
          ) : (
            <AiOutlineMenu size={28} onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full transition-transform duration-300`}
      >
        {["home", "about", "services", "doctors", "blog"].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer capitalize"
            onClick={closeMenu}
          >
            {section === "about" ? "About Us" : section}
          </Link>
        ))}

        {/* Mobile Contact Button */}
        <button
          onClick={openForm}
          className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
        >
          Contact Us
        </button>
      </div>

      {/* Contact Form */}
      {showForm && <Contact closeForm={closeForm} />}
    </div>
  );
};

export default Navbar;
