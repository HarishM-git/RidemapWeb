import React, { useState, useEffect } from 'react';
// Make sure to replace this with the correct path to your image in your project structure
import trackerImage from '../assets/hari.png';

// --- Helper Components & Hooks ---

// Custom hook to track screen size for responsiveness
const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

// FeaturePoint component for desktop view (with corrected logic)
const FeaturePoint = ({ text, position, lineWidth, textPosition, delay }) => (
    <div
      className={`absolute ${position} flex items-center z-30 group cursor-pointer animate-slideIn`}
      style={{ animationDelay: delay, opacity: 0, animationFillMode: 'forwards' }}
    >
      {textPosition === 'right' && (
        <>
          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 group-hover:bg-[#A7E92F] transition-colors duration-300" />
          <div className={`bg-white/60 ${lineWidth} h-[1px] group-hover:bg-[#A7E92F] transition-colors duration-300`} />
          <p className="text-white text-sm md:text-base ml-3 whitespace-nowrap group-hover:text-[#A7E92F] transition-colors duration-300">
            {text}
          </p>
        </>
      )}
      {textPosition === 'left' && (
        <>
          <p className="text-white text-sm md:text-base mr-3 whitespace-nowrap group-hover:text-[#A7E92F] transition-colors duration-300">
            {text}
          </p>
          <div className={`bg-white/60 ${lineWidth} h-[1px] group-hover:bg-[#A7E92F] transition-colors duration-300`} />
          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 group-hover:bg-[#A7E92F] transition-colors duration-300" />
        </>
      )}
    </div>
  );

// FeatureListItem component for mobile view
const FeatureListItem = ({ text, delay }) => (
    <div
      className="flex items-center p-3 border border-gray-700/50 bg-gray-800/20 rounded-lg mb-4 animate-slideIn backdrop-blur-sm"
      style={{ animationDelay: delay, opacity: 0, animationFillMode: 'forwards' }}
    >
      <div className="w-2.5 h-2.5 rounded-full bg-lime-400 mr-4 flex-shrink-0" />
      <p className="text-base text-white">{text}</p>
    </div>
  );


// --- Main Product Section Component ---
export default function ProductSection() {
  const isMobile = useScreenSize();
  const features = [
    { text: 'Easy installation', position: 'top-[15%] right-[55%]', lineWidth: 'w-28', textPosition: 'left', delay: '0.2s' },
    { text: 'Live GPS Tracking', position: 'top-[48%] right-[60%]', lineWidth: 'w-28', textPosition: 'left', delay: '0.4s' },
    { text: 'Route History Playback', position: 'bottom-[20%] right-[55%]', lineWidth: 'w-24', textPosition: 'left', delay: '0.6s' },
    { text: 'Remote Engine Lock', position: 'top-[22%] left-[58%]', lineWidth: 'w-20', textPosition: 'right', delay: '0.3s' },
    { text: 'Estimated Time of Arrival', position: 'bottom-[25%] left-[58%]', lineWidth: 'w-32', textPosition: 'right', delay: '0.5s' },
  ];

  return (
    <div className="bg-[#1F242C] py-16 sm:py-24 relative overflow-hidden rounded-t-[80px]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">

        {/* --- Title --- */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 sm:mb-20">
          Our <span className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-transparent bg-clip-text">Product</span>
        </h2>

        {/* Main Content Area */}
        <div className="relative flex justify-center items-center h-[450px] md:h-[550px]">
          
          {/* --- Radar Rings (RESTORED to original style) --- */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-[#A7E92F] to-[#32C766] rounded-full"
              style={{
                width: isMobile ? `${80 + i * 40}px` : `${100 + i * 100}px`,
                height: isMobile ? `${80 + i * 40}px` : `${100 + i * 100}px`,
                animation: 'pulseGlow 4s ease-in-out infinite',
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}

          {/* Tracker Image */}
          <img
            src={trackerImage}
            alt="Ridemap GPS Tracker"
            className="relative z-20 w-[120px] sm:w-[160px] md:w-[200px] object-contain animate-float"
          />

          {/* Feature Points for Desktop */}
          {!isMobile && (
            <div className="absolute top-0 left-0 w-full h-full">
              {features.map((feature, index) => (
                <FeaturePoint key={index} {...feature} />
              ))}
            </div>
          )}
        </div>

        {/* Feature List for Mobile */}
        {isMobile && (
          <div className="mt-12">
            {features.map((feature, index) => (
              <FeatureListItem key={index} text={feature.text} delay={feature.delay} />
            ))}
          </div>
        )}

        {/* --- View More Button --- */}
        {/* <div className="flex justify-center mt-16">
          <a href="#" className="bg-[#A7E92F] text-black font-bold py-3 px-8 rounded-lg text-base hover:bg-opacity-80 transition-all duration-300">
            View More
          </a>
        </div> */}
      </div>
    </div>
  );
}

// --- Keyframes for Animation (RESTORED to original `pulseGlow`) ---
const animationKeyframes = `
  @keyframes pulseGlow {
    0%, 100% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.05); opacity: 0.7; }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  .animate-slideIn {
    animation: slideIn 0.8s ease-out forwards;
  }
`;

// Inject keyframes into the document's head
if (typeof window !== 'undefined' && !document.getElementById('product-animations')) {
  const style = document.createElement("style");
  style.id = 'product-animations';
  style.innerText = animationKeyframes;
  document.head.appendChild(style);
}