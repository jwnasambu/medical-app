import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10 text-white bg-backgroundColor">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-row justify-between items-center p-5 md:px-32">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-semibold">WellnessVistae</h1>
            </Link>
          </div>

          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden lg:flex">
            <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>

          <div className="lg:hidden z-20" onClick={handleChange}>
            {menu ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </div>
        </div>

        {menu && (
          <div className="lg:hidden flex flex-col bg-backgroundColor px-4 py-6 space-y-4 text-lg font-medium">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Blog
            </Link>
            <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
