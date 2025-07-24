import React from 'react';
import trackerImage from '../assets/hari.png';

const FeaturePoint = ({ text, position, lineWidth, textPosition }) => (
  <div
    className={`absolute ${position} flex items-center z-20`}
    style={{
      animation: 'fadeIn 1s ease-out forwards',
      animationDelay: '0.5s',
      opacity: 0,
    }}
  >
    {textPosition === 'left' && (
      <p className="text-white text-xs sm:text-sm md:text-base mr-2 sm:mr-3 whitespace-nowrap">
        {text}
      </p>
    )}
    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
    <div className={`bg-white/60 ${lineWidth} h-[1px]`} />
    {textPosition === 'right' && (
      <p className="text-white text-xs sm:text-sm md:text-base ml-2 sm:ml-3 whitespace-nowrap">
        {text}
      </p>
    )}
  </div>
);

export default function ProductSection() {
  const features = [
    {
      text: 'easy installation',
      position: 'top-[18%] right-[65%] sm:right-[70%]',
      lineWidth: 'w-10 sm:w-20',
      textPosition: 'left',
    },
    {
      text: 'Live GPS Tracking',
      position: 'top-[42%] right-[78%] sm:right-[82%]',
      lineWidth: 'w-16 sm:w-28',
      textPosition: 'left',
    },
    {
      text: 'Route History Playback',
      position: 'bottom-[18%] right-[70%] sm:right-[75%]',
      lineWidth: 'w-12 sm:w-24',
      textPosition: 'left',
    },
    {
      text: 'Remote Engine Lock',
      position: 'top-[22%] left-[65%] sm:left-[70%]',
      lineWidth: 'w-10 sm:w-20',
      textPosition: 'right',
    },
    {
      text: 'Estimated Time of Arrival',
      position: 'bottom-[25%] left-[70%] sm:left-[75%]',
      lineWidth: 'w-16 sm:w-32',
      textPosition: 'right',
    },
  ];

  return (
    <div className="bg-[#151A23] py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-16 sm:mb-24"
          style={{ animation: 'fadeIn 1s ease-out forwards', opacity: 0 }}
        >
          Our{' '}
          <span className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-transparent bg-clip-text">
            Product
          </span>
        </h2>

        {/* Radar + Tracker */}
        <div className="relative flex justify-center items-center h-[300px] sm:h-[450px] md:h-[500px]">
          {/* Pulsating radar rings */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-[#a7e92f]/30 to-[#32c766]/30 rounded-full animate-pulseGlow"
              style={{
                width: `${150 + i * 70}px`,
                height: `${150 + i * 70}px`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}

          {/* GPS Device */}
          <img
            src={trackerImage}
            alt="Ridemap GPS Tracker"
            className="relative z-30 w-[150px] sm:w-[200px] md:w-[250px] object-contain"
            // style={{ animation: 'fadeIn 1s ease-out 0.3s forwards', opacity: 0 }}
          />

          {/* Feature labels */}
          <div className="absolute top-1/2 left-1/2 w-full h-full z-20 -translate-x-1/2 -translate-y-1/2">
            {features.map((feature, index) => (
              <FeaturePoint key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* View More */}
        <div
          className="flex justify-end mt-16 sm:mt-24"
          style={{ animation: 'fadeIn 1s ease-out 1s forwards', opacity: 0 }}
        >
          <a
            href="#"
            className="bg-[#A7E92F] text-black font-bold py-3 px-8 rounded-lg text-base sm:text-lg hover:bg-opacity-80 transition-all duration-300"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
}
