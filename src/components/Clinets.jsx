// src/components/Clients.jsx

import React from 'react';

// --- Logo Imports ---
// Make sure to place your logos in this folder and update paths if needed
import logoAarupadai from '../assets/logos/mec.svg';
import logoMailam from '../assets/logos/mit.svg';
import logoTakshashila from '../assets/logos/smmec.svg';
import logoSmv from '../assets/logos/smv.svg';
import logoManakula from '../assets/logos/taklogo.svg';

const logos = [
  { src: logoAarupadai, alt: 'MEC Engineering College' },
  { src: logoMailam, alt: 'MVIT Engineering College' },
  { src: logoTakshashila, alt: 'Takshashila University' },
  { src: logoSmv, alt: 'SMV School' },
  { src: logoManakula, alt: 'Manakula Vinayagar Institute of Technology' },
];

const Clients = () => {
  // This helper function renders the list of logos.
  // It's called twice to create the seamless infinite loop.
  const LogoGroup = ({ isDuplicate = false }) => (
    <div
      // This is the key: we use the .animate-marquee class you defined in index.css
      className="flex flex-shrink-0 animate-marquee"
      // The duplicate is hidden from screen readers for accessibility
      aria-hidden={isDuplicate}
    >
      {logos.map((logo, index) => (
        <div key={index} className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center">
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-h-14 sm:max-h-16 w-auto object-contain grayscale"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#151A23] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-center  bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-transparent bg-clip-text block">
          Our Clients
        </h2>
        <p className="mt-3 text-lg leading-8 text-gray-400">
          Team.Customer.Community
        </p>
      </div>

      <div
        className="relative mt-12 flex w-full overflow-x-hidden"
        // This CSS gradient mask creates the fade-out effect on the sides
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <LogoGroup />
        <LogoGroup isDuplicate={true} />
      </div>
    </div>
  );
};

export default Clients;