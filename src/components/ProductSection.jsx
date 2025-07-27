import React, { useState, useEffect } from 'react';
import trackerImage from '../assets/hari.png';

// Custom hook to track screen size
const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

// FeaturePoint component for desktop view
const FeaturePoint = ({ text, position, lineWidth, textPosition, delay }) => (
  <div
    className={`absolute ${position} flex items-center z-30 group cursor-pointer animate-slideIn`}
    style={{ animationDelay: delay, opacity: 0 }}
  >
    {textPosition === 'left' && (
      <p className="text-white text-[10px] sm:text-xs md:text-base mr-2 sm:mr-3 whitespace-nowrap group-hover:text-[#A7E92F] transition-colors duration-300">
        {text}
      </p>
    )}
    <div className="w-[6px] h-[6px] bg-white rounded-full flex-shrink-0 group-hover:bg-[#A7E92F] transition-colors duration-300" />
    <div className={`bg-white/60 ${lineWidth} h-[1px] group-hover:bg-[#A7E92F] transition-colors duration-300`} />
    {textPosition === 'right' && (
      <p className="text-white text-[10px] sm:text-xs md:text-base ml-2 sm:ml-3 whitespace-nowrap group-hover:text-[#A7E92F] transition-colors duration-300">
        {text}
      </p>
    )}
  </div>
);

// FeatureListItem component for mobile view
const FeatureListItem = ({ text, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center p-4 border border-gray-700 rounded-lg mb-4 animate-slideIn"
      style={{ animationDelay: delay, opacity: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-3 h-3 rounded-full mr-4 ${isHovered ? 'bg-[#A7E92F]' : 'bg-white'}`} />
      <p className={`text-lg ${isHovered ? 'text-[#A7E92F]' : 'text-white'}`}>{text}</p>
    </div>
  );
};

export default function ProductSection() {
  const isMobile = useScreenSize();
  const features = [
    { text: 'easy installation', position: 'top-[15%] right-[30%] sm:top-[20%] sm:right-[55%]', lineWidth: 'w-10 sm:w-16', textPosition: 'left', delay: '0.2s' },
    { text: 'Live GPS Tracking', position: 'top-[42%] right-[35%] sm:top-[48%] sm:right-[60%]', lineWidth: 'w-8 sm:w-28', textPosition: 'left', delay: '0.4s' },
    { text: 'Route History Playback', position: 'bottom-[15%] right-[30%] sm:bottom-[20%] sm:right-[55%]', lineWidth: 'w-10 sm:w-24', textPosition: 'left', delay: '0.6s' },
    { text: 'Remote Engine Lock', position: 'top-[18%] left-[30%] sm:top-[22%] sm:left-[58%]', lineWidth: 'w-8 sm:w-20', textPosition: 'right', delay: '0.3s' },
    { text: 'Estimated Time of Arrival', position: 'bottom-[20%] left-[30%] sm:bottom-[25%] sm:left-[58%]', lineWidth: 'w-12 sm:w-32', textPosition: 'right', delay: '0.5s' },
  ];

  return (
    <div className="py-12 sm:py-10 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 sm:mb-16">
          Our <span className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-transparent bg-clip-text">Product</span>
        </h2>

        <div className="relative flex justify-center items-center h-[300px] sm:h-[450px] md:h-[520px]">
          {/* Radar rings */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-[#A7E92F] to-[#32C766] rounded-full"
              style={{
                width: isMobile ? `${80 + i * 40}px` : `${150 + i * 70}px`,
                height: isMobile ? `${80 + i * 40}px` : `${150 + i * 70}px`,
                animation: 'pulseGlow 4s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}

          {/* Tracker image */}
          <img
            src={trackerImage}
            alt="Ridemap GPS Tracker"
            className="relative z-20 w-[100px] sm:w-[160px] md:w-[220px] object-contain animate-float"
          />

          {/* Features for desktop */}
          {!isMobile && (
            <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
              {features.map((feature, index) => (
                <FeaturePoint key={index} {...feature} />
              ))}
            </div>
          )}
        </div>

        {/* Features for mobile */}
        {isMobile && (
          <div className="mt-12">
            {features.map((feature, index) => (
              <FeatureListItem key={index} text={feature.text} delay={feature.delay} />
            ))}
          </div>
        )}

        {/* CTA button */}
        <div className="flex justify-center sm:justify-end mt-12 sm:mt-20">
          <a href="#" className="bg-[#A7E92F] text-black font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-md text-sm sm:text-lg hover:bg-opacity-80 transition-all duration-300">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

// Keyframes (assuming this part remains the same)
const pulseGlowKeyframes = `
  @keyframes pulseGlow {
    0%, 100% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.05); opacity: 0.7; }
  }

  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
  }

  @keyframes slideIn {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-slideIn {
    animation: slideIn 1s ease-out forwards;
  }
`;

if (typeof window !== 'undefined') {
  const style = document.createElement("style");
  style.innerText = pulseGlowKeyframes;
  document.head.appendChild(style);
}