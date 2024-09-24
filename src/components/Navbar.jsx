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
    setIsOpen(false);
  };

  const navLinks = ['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      {/* LARGER SCREENS */}
      <div className='bg-blue-primary md:flex justify-between lg:px-20 md:px-12 hidden shadow-lg'>
        <img src={logo} alt="" className='' />
        <ul className='text-white flex items-center justify-center lg:gap-14 gap-8 w-[60%]'>
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
            // <div className='bg-primary w-10 h-10 flex items-center rounded-full'>
            //   <RiCloseLine className='text-white w-10 h-6' />
            // </div>
            <></>
          ) : (
            <RiMenuFoldLine className='text-white w-10 h-6' />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`bg-blue-primary text-white fixed top-0 right-0 h-full w-64 transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className='flex justify-end p-4 '>
          <button onClick={toggleMenu} className='bg-primary rounded-full p-1'>
            <RiCloseLine className='text-white w-8 h-8' />
          </button>
        </div>
        <ul className="flex flex-col items-start p-6">
          {navLinks.map((link) => (
            <li key={link} className="py-3 relative group w-full">
              <a
                href="#"
                className={`transition duration-300 ease-in-out block ${
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
