import React, { useState } from 'react';
import { logo } from '../assets';
import { RiMenuFoldLine, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinks = ['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      {/* LARGER SCREENS */}
      <div className='bg-blue-primary md:flex justify-between lg:px-20 md:px-12 hidden shadow-lg'>
        <img src={logo} alt="" className='' />
        <ul className='text-white flex items-center justify-center lg:gap-14 gap-10 w-[60%]'>
          {navLinks.map((link) => (
            <li key={link} className="relative group lg:text-[1.1em]">
              <a
                href="#"
                className={`transition duration-300 ease-in-out ${
                  activeLink === link ? 'text-primary' : 'text-white'
                }`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
              {/* UNDERLINE EFFECT */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100`}
              ></span>
            </li>
          ))}
        </ul>
      </div>

      {/* SMALLER SCREENS */}
      <div className='bg-blue-primary flex justify-between items-center p-4 md:hidden'>
        <img src={logo} alt="" className='w-12' />
        <button onClick={toggleMenu}>
          {isOpen ? (
            <RiCloseLine className='text-white w-10 h-6' />
          ) : (
            <RiMenuFoldLine className='text-white w-10 h-6' />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`bg-blue-primary border-t text-white flex flex-col items-center transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
        } md:hidden`}
      >
        <ul className={`w-full flex items-center justify-center gap-5 ${isOpen ? 'block' : 'hidden'}`}>
          {navLinks.map((link) => (
            <li key={link} className="py-3 relative group m-2">
              <a
                href="#"
                className={`transition duration-300 ease-in-out ${
                  activeLink === link ? 'text-primary' : 'text-white'
                }`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
              {/* UNDERLINE EFFECT */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
