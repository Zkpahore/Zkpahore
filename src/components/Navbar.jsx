import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-4 relative'>
        <div className='flex justify-between items-center'>
          <img className='w-28' src='logo.png' />
          <button onClick={toggleMobileMenu} className='lg:hidden md:hidden text-white focus:outline-none'>
            <HiMenuAlt3 className='w-6 h-6'/>
          </button>
        
          <div className='hidden lg:flex md:flex space-x-4 text-white'>
            <a href='#'>Home</a>
            <a href='#project'>Project</a>
            <a href='#skills'>Skills</a>
            <a href='#Contact'>Contact</a>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="mobileMenu" className="lg:hidden bg-black p-2 text-center font-bold text-3xl absolute top-full left-0 w-full">
            <li><a href="#" className="block text-white my-5 hover:text-blue-600">Home</a></li>
            <hr className="mx-8" />
            <li><a href="#Pro" className="block text-white my-5 hover:text-blue-600">Projects</a></li>
            <hr className="mx-10" />
            <li><a href="#" className="block text-white my-5 hover:text-blue-600">About Us</a></li>
            <hr className="mx-16" />
            <li><a href="#" className="block text-white my-5 hover:text-blue-600">Contact</a></li>
            <hr className="mx-16 mb-5" />
          </div>
        )}
      </nav>  
    </>
  );
}

export default Navbar;
