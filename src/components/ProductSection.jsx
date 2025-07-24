import React from 'react';
import trackerImage from '../assets/hari.png'; // This path is correct and working for you.

// FeaturePoint component with hover effects and new animation class
const FeaturePoint = ({ text, position, lineWidth, textPosition, delay }) => (
  <div
    className={`absolute ${position} flex items-center z-30 group cursor-pointer animate-slideIn`} // Use the new class
    style={{ animationDelay: delay, opacity: 0 }} // Keep style for delay only
  >
    {textPosition === 'left' && (
      <p className="text-white text-xs sm:text-base mr-3 whitespace-nowrap group-hover:text-[#A7E92F] transition-colors duration-300">
        {text}
      </p>
    )}
    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 group-hover:bg-[#A7E92F] transition-colors duration-300" />
    <div className={`bg-white/60 ${lineWidth} h-[1px] group-hover:bg-[#A7E92F] transition-colors duration-300`} />
    {textPosition === 'right' && (
      <p className="text-white text-xs sm:text-base ml-3 whitespace-nowrap group-hover:text-[#A7E92F] transition-colors duration-300">
        {text}
      </p>
    )}
  </div>
);

export default function ProductSection() {
  // Adjusted for better mobile view
  const features = [
    { text: 'easy installation', position: 'top-[20%] right-[60%]', lineWidth: 'w-8 sm:w-16', textPosition: 'left', delay: '0.2s' },
    { text: 'Live GPS Tracking', position: 'top-[48%] right-[70%]', lineWidth: 'w-12 sm:w-28', textPosition: 'left', delay: '0.4s' },
    { text: 'Route History Playback', position: 'bottom-[20%] right-[65%]', lineWidth: 'w-10 sm:w-24', textPosition: 'left', delay: '0.6s' },
    { text: 'Remote Engine Lock', position: 'top-[22%] left-[60%]', lineWidth: 'w-8 sm:w-20', textPosition: 'right', delay: '0.3s' },
    { text: 'Estimated Time of Arrival', position: 'bottom-[25%] left-[65%]', lineWidth: 'w-12 sm:w-32', textPosition: 'right', delay: '0.5s' },
  ];

  return (
    <div className="bg-[#151A23] py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 sm:mb-20">
          Our <span className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-transparent bg-clip-text">Product</span>
        </h2>

        {/* Adjusted sizes for mobile */}
        <div className="relative flex justify-center items-center h-[280px] sm:h-[450px] md:h-[500px]">
          
          {/* Pulsating radar rings (This works without config) */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-[#a7e92f]/20 to-[#32c766]/20 rounded-full"
              style={{
                width: `${120 + i * 50}px`,
                height: `${120 + i * 50}px`,
                // We can define the animation inline if it's simple
                animation: 'pulseGlow 4s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}

          {/* GPS Device with new float animation class */}
          <img
            src={trackerImage}
            alt="Ridemap GPS Tracker"
            className="relative z-20 w-[120px] sm:w-[200px] md:w-[250px] object-contain animate-float" // Use the new class
          />

          {/* Feature points container (z-index issue fixed) */}
          <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
            {features.map((feature, index) => (
              <FeaturePoint key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Button centered on mobile */}
        <div className="flex justify-center sm:justify-end mt-16 sm:mt-24">
          <a href="#" className="bg-[#A7E92F] text-black font-bold py-3 px-8 rounded-lg text-base sm:text-lg hover:bg-opacity-80 transition-all duration-300">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

// Keyframes for the pulsating glow, defined here for clarity but can be in the CSS file too.
const pulseGlowKeyframes = `
  @keyframes pulseGlow {
    0%, 100% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.05); opacity: 0.7; }
  }
`;

// Inject keyframes into the document head
if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = pulseGlowKeyframes;
  document.head.appendChild(styleSheet);
}