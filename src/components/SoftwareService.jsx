// src/components/SoftwareService.jsx

import React from 'react';
import G1 from '../assets/G1.png'; 
import G2 from '../assets/G2.png'; 
import G3 from '../assets/G3.png'; 
import G4 from '../assets/G4.png'; 
const SoftwareService = () => {
  return (
    <section className=" text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-transparent bg-clip-text block">Our Software Service</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Students App Card */}
          <div className="bg-[#1F242C] rounded-4xl p-8 shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 transition-transform duration-300 hover:scale-105">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Students App</h3>
              <p className="text-[#8B8D91]">
                Track Your College Bus In Real Time, Get Alerts For Arrival And Delays,
                And Ensure Safe, Hassle-Free Commuting For Both Students And Parents.
              </p>
              <a href="#">
                <button className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] hover:bg-green-400 text-black font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 text-sm mt-4">
                  Download
                </button>
              </a>
            </div>
            <div className="flex-shrink-0">
              <img
                src={G1}
                alt="Students App"
                className="w-48 h-auto object-contain"
              />
            </div>
            
          </div>

          {/* Pass Checker Card */}
          <div className="bg-[#1F242C] rounded-4xl p-8 shadow-lg flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0 md:space-x-reverse md:space-x-8 transition-transform duration-300 hover:scale-105">
            <div className="flex-shrink-0">
              <img  
                src={G2}  
                alt="Pass Checker"
                className="w-48 h-auto object-contain"
              />
            </div>
            <div className="md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Pass Checker</h3>
              <p className="text-[#8B8D91]">
                A Quick And Secure Way For College Staff To Scan And Verify Student Bus
                passes Using A Simple Mobile Interface.
              </p>
              <a href="#">
                <button className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] hover:bg-green-400 text-black font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 text-sm mt-4">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* Admin Dashboard Card */}
          <div className="bg-[#1F242C] rounded-4xl p-8 shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 transition-transform duration-300 hover:scale-105">
             <div>
              <h3 className="text-2xl font-semibold mb-4">Admin Dashboard</h3>
              <p className="text-[#8B8D91]">
                A Quick And Secure Way For College Staff To Scan And Verify Student Bus
                Passes Using A Simple Mobile Interface.
              </p>
              <a href="#">
                <button className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] hover:bg-green-400 text-black font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 text-sm mt-4">
                  Visit
                </button>
              </a>
            </div>
            <div className="flex-shrink-0">
              <img
                src={G3}
                alt="Admin Dashboard"
                className="w-64 h-auto object-contain"
              />
            </div>
           
          </div>

          {/* RideMap 365 Website Card */}
          <div className="bg-[#1F242C] rounded-4xl p-8 shadow-lg flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0 md:space-x-reverse md:space-x-8 transition-transform duration-300 hover:scale-105">
            <div className="flex-shrink-0">
              {/* Replace with your actual RideMap 365 Website image */}
              <img
                src={G4}
                alt="RideMap 365 Website"
                className="w-64 h-auto object-contain"
              />
            </div>
            <div className="md:text-left">
              <h3 className="text-2xl font-semibold mb-4">RideMap 365 Website</h3>
              <p className="text-[#8B8D91]">
                Your All-In-One Platform For College Transport – With Live
                Tracking, Pass Renewal, Route Info, And Student Support.
              </p>
              <a href="#">
                <button className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] hover:bg-green-400 text-black font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 text-sm mt-4">
                  Visit
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SoftwareService;
