// import React, { useState } from 'react';
// // import hari from '../assets/ctPhoto.png'; // Replace with your actual image path
// import hari from '../assets/H.png'; 
// // --- DATA ---
// const teamMembers = [
//   {
//     name: 'Harish M',
//     title: 'Developer',
//     img: hari,
//   },
//   {
//     name: 'Harish M',
//     title: 'Developer',
//     img: hari,
//   },
//   {
//     name: 'Harish M',
//     title: 'Developer',
//     img: hari,
//   },
//   {
//     name: 'Harish M',
//     title: 'Developer',
//     img: hari,
//   },
//   {
//     name: 'Harish M',
//     title: 'Developer',
//     img: hari,
//   },
// ];

// // --- MAIN COMPONENT ---
// const TeamSection = () => {
//   // Set the initial active index to the middle member
//   const [activeIndex, setActiveIndex] = useState(Math.floor(teamMembers.length / 2));

//   const handleCardClick = (index) => {
//     setActiveIndex(index);
//   };

//   // Function to determine the style of each card based on its position
//   const getCardStyle = (index) => {
//     const offset = index - activeIndex;
//     const absOffset = Math.abs(offset);

//     // Base styles for all cards
//     const style = {
//       position: 'absolute',
//       transition: 'all 0.5s ease-out',
//       zIndex: 10 - absOffset,
//     };

//     // Positional and transform styles
//     if (offset === 0) {
//       // Center card
//       return {
//         ...style,
//         transform: 'translateX(-50%) scale(1)',
//         opacity: 1,
//         left: '50%',
//         top: 0,
//       };
//     } else if (offset === 1 || offset === -1) {
//        // Immediate neighbors
//        const side = offset > 0 ? '75%' : '25%';
//        return {
//         ...style,
//         transform: 'translateX(-50%) scale(0.8)',
//         opacity: 0.7,
//         left: side,
//         top: '1rem',
//        };
//     } else {
//         // Far cards
//         const side = offset > 0 ? '95%' : '5%';
//         return {
//         ...style,
//         transform: 'translateX(-50%) scale(0.6)',
//         opacity: 0.4,
//         left: side,
//         top: '2rem',
//         };
//     }
//   };

//   return (
//     <section className="bg-[var(--brand-dark)] w-full py-16 md:py-24">
//       <div className="container mx-auto px-4 text-center">
//         {/* --- Title --- */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
//             Meet Our Team
//           </span>
//         </h2>
        
//         {/* --- Subtitle --- */}
//         <p className="text-gray-300 max-w-2xl mx-auto mb-12 md:mb-20">
//           Our talented team is dedicated to building innovative solutions and delivering exceptional results.
//         </p>

//         {/* --- Team Carousel Container --- */}
//         <div className="relative w-full h-[300px] md:h-[350px] max-w-4xl mx-auto">
//           {teamMembers.map((member, index) => {
//             const style = getCardStyle(index);
//             const isActive = index === activeIndex;

//             return (
//               <div
//                 key={index}
//                 className={`cursor-pointer bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg flex flex-col items-center ${isActive ? ' border-2 border-[var(--accent-primary)]' : 'border-2 border-transparent'}`}
//                 style={style}
//                 onClick={() => handleCardClick(index)}
//               >
//                 <div 
//                   className={`w-24 h-24 md:w-38 md:h-38 mb-4 transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
//                 >
//                   <img
//                     src={member.img}
//                     alt={member.name}
//                     className="w-full h-full rounded-full object-cover border-4 border-gray-700"
//                   />
//                 </div>
//                 <h3 className={`font-bold text-white transition-colors duration-500 ${isActive ? 'text-theme-green-light' : 'text-white'} text-lg`}>
//                   {member.name}
//                 </h3>
//                 <p className="text-gray-400 text-sm">{member.title}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;

import React, { useState } from 'react';
// Import your team member images
import hari from '../assets/H.png'; 
import yuv from '../assets/yuv.jpg';

// --- DATA (Expanded to better demonstrate the infinite effect) ---
const teamMembers = [
  {
    name: 'Harish M',
    title: 'Developer',
    img: hari,
    url: 'https://yuv.1he.dev/'
  },
  {
    name: 'Yuvaraja M',
    title: 'Developer',
    img: yuv,
    url: 'https://yuv.1he.dev/'
  },
  {
    name: 'Team Member 3',
    title: 'Designer',
    img: hari, // Replace with actual image
    url: 'https://yuv.1he.dev/'
  },
  {
    name: 'Team Member 4',
    title: 'Project Manager',
    img: yuv, // Replace with actual image
    url: 'https://yuv.1he.dev/'
  },
  {
    name: 'Team Member 5',
    title: 'QA Engineer',
    img: hari, // Replace with actual image
    url: 'https://yuv.1he.dev/'
  },
  {
    name: 'Team Member 6',
    title: 'DevOps',
    img: yuv, // Replace with actual image
    url: 'https://yuv.1he.dev/'
  },
  {
    name: 'Team Member 7',
    title: 'Marketing',
    img: hari, // Replace with actual image
    url: 'https://yuv.1he.dev/'
  },
  {
    name: '8',
    title: 'Developer',
    img: hari,
    url: 'https://yuv.1he.dev/'
  },
  {
    name: '9',
    title: 'Developer',
    img: yuv,
    url: 'https://yuv.1he.dev/'
  },
  {
    name: '10',
    title: 'Designer',
    img: hari, // Replace with actual image
    url: 'https://yuv.1he.dev/'
  },
  {
    name: '11',
    title: 'Project Manager',
    img: yuv, // Replace with actual image
    url: 'https://yuv.1he.dev/'
  },
  {
    name: '12',
    title: 'QA Engineer',
    img: hari, // Replace with actual image
    url: 'https://yuv.1he.dev/'
  },
  {
    name: '13',
    title: 'DevOps',
    img: yuv, // Replace with actual image
    url: 'https://yuv.1he.dev/'
  },
  {
    name: '14',
    title: 'Marketing',
    img: hari, // Replace with actual image
    url: 'https://yuv.1he.dev/'
  },
];

// --- MAIN COMPONENT ---
const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(teamMembers.length / 2));

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const getCardStyle = (index) => {
    const totalItems = teamMembers.length;
    let offset = index - activeIndex;

    // The core logic for the circular effect
    if (Math.abs(offset) > totalItems / 2) {
      offset = offset < 0 ? offset + totalItems : offset - totalItems;
    }

    const absOffset = Math.abs(offset);

    const baseStyle = {
      position: 'absolute',
      transition: 'all 0.5s ease-out',
      zIndex: 10 - absOffset,
      width: 'clamp(180px, 30vw, 240px)',
    };

    // --- NEW LOGIC: HIDE CARDS THAT ARE TOO FAR AWAY ---
    // Only show the center card and two neighbors on each side (absOffset <= 2)
    if (absOffset > 2) {
      return {
        ...baseStyle,
        transform: 'translateX(-50%) scale(0.5)',
        opacity: 0,
        left: offset > 0 ? '110%' : '-10%', // Position them off-screen
        pointerEvents: 'none', // Make them unclickable and unhoverable
      };
    }

    // --- STYLING LOGIC FOR VISIBLE CARDS (Unchanged) ---
    if (offset === 0) { // Center card
      return {
        ...baseStyle,
        transform: 'translateX(-50%) scale(1)',
        opacity: 1,
        left: '50%',
        top: 0,
      };
    }
    
    if (absOffset === 1) { // Immediate neighbors
       const side = offset > 0 ? '75%' : '25%';
       return {
        ...baseStyle,
        transform: 'translateX(-50%) scale(0.8)',
        opacity: 0.7,
        left: side,
        top: '1rem',
       };
    }
    
    // This is the old 'else' block, now specifically for the second neighbor
    if (absOffset === 2) { 
        const side = offset > 0 ? '95%' : '5%';
        return {
        ...baseStyle,
        transform: 'translateX(-50%) scale(0.6)',
        opacity: 0.4,
        left: side,
        top: '2rem',
        };
    }

    // Fallback to hide any other card
    return { ...baseStyle, opacity: 0, pointerEvents: 'none' };
  };

  return (
    <section className="bg-[var(--brand-dark)] w-full py-16 md:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* --- Title --- */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
            Meet Our Team
          </span>
        </h2>
        
        {/* --- Subtitle --- */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 md:mb-20">
          Our talented team is dedicated to building innovative solutions and delivering exceptional results.
        </p>

        {/* --- Team Carousel Container --- */}
        <div className="relative w-full h-[300px] md:h-[350px] max-w-4xl mx-auto">
          {teamMembers.map((member, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`cursor-pointer bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg flex flex-col items-center ${isActive ? ' border-2 border-[var(--accent-primary)]' : 'border-2 border-transparent'}`}
                style={style}
                onClick={() => handleCardClick(index)}
              >
                <div 
                  className={`w-24 h-24 md:w-32 md:h-32 mb-4 transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-gray-700"
                  />
                </div>
                <h3 className={`font-bold transition-colors duration-500 ${isActive ? 'text-[var(--accent-primary)]' : 'text-white'} text-lg`}>
                  {member.name}
                </h3>
                {/* --- Corrected Link Structure --- */}
                <a 
                  href={member.url} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className="text-gray-400 text-sm hover:text-[var(--accent-primary)] transition-colors duration-300"
                  // Stop propagation to prevent the card from centering when the link is clicked
                  onClick={(e) => e.stopPropagation()} 
                >
                  {member.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;