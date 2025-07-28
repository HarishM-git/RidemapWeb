import React from 'react';
import { Link } from 'react-router-dom';

// Import react-icons for social media icons
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// --- IMPORTANT ---
// Make sure these paths point to your actual image assets
import ridemapLogo from '../assets/Rr.png';
import googlePlayBadge from '../assets/P1.png';
import appStoreBadge from '../assets/A1.png';

const Footer = () => {
  // Data for the link columns (no changes needed here)
const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Services', href: '#' },
      { name: 'Terms & Condition', href: '/terms' },
      { name: 'Privacy Policy', href: '/policy' },
    ],
    getHelp: [
      { name: 'FAQ', href: '#' },
      { name: 'Shipping', href: '#' },
      { name: 'Payment option', href: '#' },
    ],
    onlineShop: [
      { name: 'Amazon', href: '#' },
      { name: 'Flipkart', href: '#' },
      { name: 'Ridemap.in', href: '#' },
    ],
  };

  // Reusable component for the social media links
  const SocialLink = ({ href, icon: Icon }) => (
    <a href={href} className="text-white bg-gray-700 p-2.5 rounded-full transition-colors duration-300 hover:bg-lime-400 hover:text-gray-900">
      <span className="sr-only">{Icon.name.replace('Fa', '')}</span>
      <Icon className="h-5 w-5" />
    </a>
  );

  return (
    <footer className="bg-[#1F242C] rounded-t-4xl">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* 
            UPDATED Column 1: Brand Info & App Downloads 
            - We use `flex flex-col` to stack items vertically.
            - `items-center` centers them horizontally for mobile view.
            - `lg:items-start` resets alignment to the left for large screens.
          */}
          <div className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left">
            <img src={ridemapLogo} className="h-9" alt="Ridemap Logo" />
            <h2 className="mt-6 text-2xl font-semibold text-white">
              Download now
            </h2>
            <div className="mt-4 flex gap-4">
              <a href="#" aria-label="Get it on Google Play">
                <img src={googlePlayBadge} className="h-12" alt="Google Play Store" />
              </a>
              <a href="#" aria-label="Download on the App Store">
                <img src={appStoreBadge} className="h-12" alt="Apple App Store" />
              </a>
            </div>
          </div>

          {/* 
            Link Columns Container 
            - `grid-cols-2` creates the 2x2 grid on mobile.
            - `md:grid-cols-4` expands it to a 4-column layout on medium screens and up.
          */}
          <div className="grid grid-cols-2 gap-8 text-left md:grid-cols-4 lg:col-span-8">
            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-lime-400">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
<Link to={link.href} className="text-gray-300 transition-colors hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Help Links */}
            <div>
              <h3 className="font-semibold text-lime-400">Get Help</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.getHelp.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 transition-colors hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Online Shop Links */}
            <div>
              <h3 className="font-semibold text-lime-400">Online Shop</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.onlineShop.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 transition-colors hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Us */}
            <div>
              <h3 className="font-semibold text-lime-400">Contact us</h3>
              <div className="mt-4 flex space-x-3">
                <SocialLink href="#" icon={FaFacebookF} />
                <SocialLink href="#" icon={FaWhatsapp} />
                <SocialLink href="#" icon={FaInstagram} />
                <SocialLink href="#" icon={FaLinkedinIn} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-lime-400 py-4">
        <p className="text-center text-sm text-gray-900 font-bold">
          Copyright © 2022–2024 Ridemap. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
