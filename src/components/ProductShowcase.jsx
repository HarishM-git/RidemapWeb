import React, { useState, useEffect } from 'react';

const ProductShowcase = () => {
  const [pulseAnimation, setPulseAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 relative">
      {/* Background matching the original */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-4">
            Our Product
          </h1>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Main container for the circular design */}
          <div className="relative w-[600px] h-[600px] md:w-[700px] md:h-[700px]">
            
            {/* Concentric Green Circles - Exact match */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outermost circle */}
              <div 
                className={`absolute w-[600px] h-[600px] md:w-[700px] md:h-[700px] rounded-full transition-all duration-2000 ${
                  pulseAnimation ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  background: 'radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, rgba(74, 222, 128, 0.08) 40%, rgba(74, 222, 128, 0.03) 70%, transparent 100%)',
                  border: '2px solid rgba(74, 222, 128, 0.2)'
                }}
              />
              
              {/* Second circle */}
              <div 
                className={`absolute w-[480px] h-[480px] md:w-[560px] md:h-[560px] rounded-full transition-all duration-2000 ${
                  pulseAnimation ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  background: 'radial-gradient(circle, rgba(101, 163, 13, 0.25) 0%, rgba(101, 163, 13, 0.15) 50%, rgba(101, 163, 13, 0.05) 80%, transparent 100%)',
                  border: '2px solid rgba(101, 163, 13, 0.3)'
                }}
              />
              
              {/* Third circle */}
              <div 
                className={`absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full transition-all duration-2000 ${
                  pulseAnimation ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  background: 'radial-gradient(circle, rgba(132, 204, 22, 0.35) 0%, rgba(132, 204, 22, 0.25) 60%, rgba(132, 204, 22, 0.1) 85%, transparent 100%)',
                  border: '2px solid rgba(132, 204, 22, 0.4)'
                }}
              />
              
              {/* Inner circle */}
              <div 
                className={`absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full transition-all duration-2000 ${
                  pulseAnimation ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  background: 'radial-gradient(circle, rgba(163, 230, 53, 0.45) 0%, rgba(163, 230, 53, 0.35) 70%, rgba(163, 230, 53, 0.15) 90%, transparent 100%)',
                  border: '2px solid rgba(163, 230, 53, 0.5)'
                }}
              />
              
              {/* Center bright circle */}
              <div 
                className={`absolute w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full transition-all duration-2000 ${
                  pulseAnimation ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  background: 'radial-gradient(circle, rgba(190, 242, 100, 0.6) 0%, rgba(190, 242, 100, 0.4) 80%, transparent 100%)',
                  border: '2px solid rgba(190, 242, 100, 0.7)'
                }}
              />
            </div>

            {/* Center Device - Placeholder for your image */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="relative">
                {/* You can replace this div with your actual image */}
                <img 
                  src="/api/placeholder/80/120" 
                  alt="GPS Tracker Device"
                  className="w-20 h-30 object-contain filter drop-shadow-lg"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
                />
                {/* If you don't have the image yet, this div simulates it */}
                <div className="absolute inset-0 bg-gray-700 rounded-lg flex flex-col items-center justify-center text-green-400 text-xs font-bold w-20 h-30">
                  <div className="mb-2">ROEMAP</div>
                  <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse mb-2"></div>
                  <div className="w-8 h-4 border border-gray-500 rounded-sm mb-1"></div>
                </div>
              </div>
            </div>

            {/* Feature Labels with exact positioning */}
            
            {/* Top Left - easy installation */}
            <div className="absolute top-16 left-8 md:top-20 md:left-12">
              <div className="flex items-center text-white text-sm md:text-base">
                <span>easy installation</span>
                <div className="ml-3 w-2 h-2 bg-white rounded-full"></div>
                <div className="ml-1 w-12 md:w-16 h-0.5 bg-white"></div>
              </div>
            </div>

            {/* Top Right - Remote Engine Lock */}
            <div className="absolute top-24 right-8 md:top-28 md:right-12">
              <div className="flex items-center text-white text-sm md:text-base">
                <div className="mr-1 w-12 md:w-16 h-0.5 bg-white"></div>
                <div className="mr-3 w-2 h-2 bg-white rounded-full"></div>
                <span>Remote Engine Lock</span>
              </div>
            </div>

            {/* Middle Left - Live GPS Tracking */}
            <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2">
              <div className="flex items-center text-white text-sm md:text-base">
                <span>Live GPS Tracking</span>
                <div className="ml-3 w-2 h-2 bg-white rounded-full"></div>
                <div className="ml-1 w-12 md:w-16 h-0.5 bg-white"></div>
              </div>
            </div>

            {/* Middle Right - easy installation */}
            <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 translate-y-8">
              <div className="flex items-center text-white text-sm md:text-base">
                <div className="mr-1 w-12 md:w-16 h-0.5 bg-white"></div>
                <div className="mr-3 w-2 h-2 bg-white rounded-full"></div>
                <span>easy installation</span>
              </div>
            </div>

            {/* Bottom Left - Route History Playback */}
            <div className="absolute bottom-20 left-8 md:bottom-24 md:left-12">
              <div className="flex items-center text-white text-sm md:text-base">
                <div className="flex flex-col">
                  <span>Route History</span>
                  <span>Playback</span>
                </div>
                <div className="ml-3 w-2 h-2 bg-white rounded-full"></div>
                <div className="ml-1 w-12 md:w-16 h-0.5 bg-white"></div>
              </div>
            </div>
          </div>

          {/* View More Button - positioned like in original */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
            <button className="bg-green-500 hover:bg-green-400 text-black font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 text-sm">
              View More
            </button>
          </div>
        </div>

        {/* Mobile responsive feature list */}
        <div className="md:hidden mt-8 space-y-3 px-4">
          <div className="text-white text-sm">• easy installation</div>
          <div className="text-white text-sm">• Remote Engine Lock</div>
          <div className="text-white text-sm">• Live GPS Tracking</div>
          <div className="text-white text-sm">• easy installation</div>
          <div className="text-white text-sm">• Route History Playback</div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;