import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import ima from '../assets/cont.png'; // Replace with your actual image path
// Reusable input field component for clean code
const FormInput = ({ id, label, type = 'text', placeholder }) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full bg-[var(--brand-light)] text-gray-300 placeholder-gray-500 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition-all duration-300 outline-none"
    />
  </div>
);

const ContactUs = () => {
  return (
    <div className="bg-[var(--brand-dark)] w-full flex justify-center items-center mt-0 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-transparent bg-clip-text block bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                Contact Us
            </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Left Column: Image and Social Links */}
          <div className="lg:col-span-2 space-y-8">
            <div className="w-full h-80 bg-[var(--brand-light)] rounded-2xl flex items-center justify-center">
              {/* You can replace this div with an <img> tag */}
              <img src={ima} alt="" />
            </div>
            <div className="bg-[var(--brand-light)] p-6 rounded-2xl">
              <p className="font-semibold text-white mb-4">Follow on</p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[var(--accent-primary)] hover:text-black">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[var(--accent-primary)] hover:text-black">
                  <FaWhatsapp />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[var(--accent-primary)] hover:text-black">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[var(--accent-primary)] hover:text-black">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3 bg-[var(--brand-light)] p-8 rounded-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput id="firstName" label="First Name" placeholder="Enter First Name" />
                <FormInput id="lastName" label="Last Name" placeholder="Enter Last Name" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput id="email" label="Email" type="email" placeholder="Enter your Email" />
                <FormInput id="phone" label="Phone" type="tel" placeholder="Enter Phone Number" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your Message"
                  className="w-full bg-gray-900/50 text-gray-300 placeholder-gray-500 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition-all duration-300 outline-none"
                ></textarea>
              </div>

              <div className="text-right">
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-black font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105"
                >
                  Send Your Message
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;