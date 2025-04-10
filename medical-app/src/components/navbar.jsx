import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-row items-center justify-between">
          <div className="cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
              <h1 className="text-2xl font-semibold">WellnessVistae</h1>
            </Link>
          </div>
          
          <nav className='hidden lg:flex flex-row' items-center text-lg font-medium gap-8>
            <div className="flex gap-4">
              <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">Home</Link>
              <Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer">About</Link>
              <Link to="services" spy={true} smooth={true} duration={500} className="cursor-pointer">Services</Link>
              <Link to="doctors" spy={true} smooth={true} duration={500} className="cursor-pointer">Doctors</Link>
              <Link to="blog" spy={true} smooth={true} duration={500} className="cursor-pointer">Blog</Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
