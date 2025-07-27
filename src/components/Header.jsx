import React, { useState } from 'react';
import logo from '../assets/Rr.png'; // Ensure this path to your logo is correct

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
      <header className="bg-[#1F242C] rounded-full py-4 px-6 flex justify-between items-center shadow-lg mx-auto mt-4 w-[95%] max-w-7xl z-20">
        {/* Logo Section */}
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Ridemap Logo" className="h-7" />
        </a>

        {/* Mobile Hamburger Button */}
        <div className="block lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white p-2 space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Nav Links for Desktop */}
        <nav className="hidden lg:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className={`font-medium transition-colors duration-200 ${
                link.active ? 'text-[#A7E92F]' : 'text-white'
              } hover:text-[#A7E92FAB]`}
            >
              {link.text}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Menu (Drawer and Overlay) */}
      <div
        className={`lg:hidden fixed inset-0 z-30 transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'}`}
          onClick={toggleMobileMenu}
        ></div>

        {/* Drawer */}
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
