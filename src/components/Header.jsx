import React, { useState } from 'react';
// This component assumes you have a logo image at the specified path.
import logo from '../assets/Rr.png'; 

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation links defined in an array for cleaner code
  const navLinks = [
    { href: '#', text: 'Home', active: true },
    { href: '#service', text: 'Service', active: false },
    { href: '#pricing', text: 'Pricing', active: false },
    { href: '#contact', text: 'Contact', active: false },
  ];

  return (
    <>
      <div className="mt-4 w-full flex justify-center">
        <header className="bg-[#010718] rounded-full py-3 px-6 flex justify-between items-center shadow-lg w-[95%] max-w-7xl z-20">
          {/* Logo Section (remains on the left) */}
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Ridemap Logo" className="h-8" />
          </a>

          {/* Mobile Hamburger Button */}
          <div className="block lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white p-2 space-y-1.5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>

          {/* Nav Links and Button Container (grouped on the right) */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Nav Links for Desktop */}
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className={`font-semibold transition-colors duration-200 ${
                  link.active ? 'text-[#A7E92F]' : 'text-white'
                } hover:text-[#A7E92FAB]`}
              >
                {link.text}
              </a>
            ))}

            {/* Download Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.igniteskylabs.ridemap"
              target='blank'
              className="bg-[#A7E92F] hover:bg-[#96d02a] text-black font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 text-base"
            >
              Downloads
            </a>
          </div>
        </header>
      </div>

      {/* Mobile Menu (Drawer and Overlay) - Unchanged */}
      <div
        className={`lg:hidden fixed inset-0 z-30 transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'}`}
          onClick={toggleMobileMenu}
        ></div>
        <div
          className={`absolute top-0 right-0 h-full bg-[#151A23] w-64 p-8 shadow-xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col space-y-8 mt-10">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className={`text-xl font-medium transition-colors duration-200 ${
                  link.active ? 'text-[#A7E92F]' : 'text-white'
                } hover:text-[#A7E92FAB]`}
                onClick={toggleMobileMenu}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;