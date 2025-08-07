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
import nivi from '../assets/nivi.jpg'; 
import abi from '../assets/abi.png';
import abii from '../assets/abii.png';
import Team from './Team';
// --- DATA (Expanded to better demonstrate the infinite effect) ---
const teamMembers = [
  {
    name: 'Nivetha K',
    title: 'Designer',
    img: nivi, 
    githubUrl: 'https://github.com/Nivethakumar19',
    linkedinUrl: 'https://www.linkedin.com/in/nivethak-uiux/',
    portfolioUrl: 'https://www.behance.net/nivetha_uiux'
  },
  
  {
    name: 'Yuvaraja M',
    title: 'Developer',
    img: yuv,
    githubUrl: 'https://github.com/yuvaraja28/',
    linkedinUrl: 'https://www.linkedin.com/in/yuvaraja-m/',
    portfolioUrl: 'https://yuv.1he.dev/'
  },
  {
    name: 'Harish M',
    title: 'Developer',
    img: hari,
    githubUrl: 'https://github.com/HarishM-git',
    linkedinUrl: 'https://www.linkedin.com/in/harish-dev-edits/',
    portfolioUrl: 'https://hari.1he.dev/'
  },
  {
    name: 'Sathish S',
    title: 'Automation Engineer',
    img: "https://sathishzus.pages.dev/images/sathishzus.jpeg", 
    githubUrl: 'https://github.com/sathishzuss',
    linkedinUrl: 'https://www.linkedin.com/in/sathishzus-s-3b66491b6/',
    portfolioUrl: 'https://sathishzus.pages.dev/'
  },
  {
    name: 'Abi Praveen',
    title: 'Backend Developer',
    img: abii, 
    githubUrl: 'https://github.com/pravee42',
    linkedinUrl: 'https://www.linkedin.com/in/praveenkumar-abipravi/',
    portfolioUrl: 'https://abipravi.in/'
  },
  // {
  //   name: 'Team Member 6',
  //   title: 'DevOps',
  //   img: yuv, 
  //   githubUrl: '#',
  //   linkedinUrl: '#',
  //   portfolioUrl: '#'
  // },
  // {
  //   name: 'Team Member 7',
  //   title: 'Marketing',
  //   img: hari, 
  //   githubUrl: '#',
  //   linkedinUrl: '#',
  //   portfolioUrl: '#'
  // },
  // {
  //   name: '8',
  //   title: 'Developer',
  //   img: hari,
  //   githubUrl: '#',
  //   linkedinUrl: '#',
  //   portfolioUrl: '#'
  // },
  // {
  //   name: '9',
  //   title: 'Developer',
  //   img: yuv,
  //   githubUrl: '#',
  //   linkedinUrl: '#',
  //   portfolioUrl: '#'
  // },
  // {
  //   name: '10',
  //   title: 'Designer',
  //   img: hari, 
  //   githubUrl: '#',
  //   linkedinUrl: '#',
  //   portfolioUrl: '#'
  // },
  // {
  //   name: '11',
  //   title: 'Project Manager',
  //   img: yuv, 
  //   githubUrl: '#',
  //   linkedinUrl: '#',
  //   portfolioUrl: '#'
  // },
  // {
  //   name: '12',
  //   title: 'QA Engineer',
  //   img: hari, 
  //   githubUrl: '#',
  //   linkedinUrl: '#',
  //   portfolioUrl: '#'
  // },
  // {
  //   name: '13',
  //   title: 'DevOps',
  //   img: yuv, 
  //   githubUrl: '#',
  //   linkedinUrl: '#',
  //   portfolioUrl: '#'
  // },
  // {
  //   name: '14',
  //   title: 'Marketing',
  //   img: hari, 
  //   githubUrl: '#',
  //   linkedinUrl: '#',
  //   portfolioUrl: '#'
  // },
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
    <section className="bg-[var(--brand-dark)] w-full py-16 md:py-24 overflow-x-hidden select-none">
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
        <div className='mt-[-50px]'>
          <div className='font-semibold text-3xl text-white'>Directives</div>

        <Team></Team>
        </div>
        <div className='font-semibold text-3xl text-white mb-8 mt-8'>
          Team Members
        </div>
        {/* --- Team Carousel Container --- */}
        <div className="relative w-full h-[300px] md:h-[350px] max-w-4xl mx-auto">
          {teamMembers.map((member, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`cursor-pointer bg-[#1F242C] backdrop-blur-sm rounded-xl p-4 md:p-6 flex flex-col items-center transition-all duration-300 ${isActive ? 'border-2 border-[var(--accent-primary)] shadow-[0_0_20px_-5px_var(--accent-primary)]' : 'border-2 border-transparent shadow-lg'}`}
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
                <div className="text-gray-400 text-sm">
                  {member.title}
                </div>
                <div className="flex space-x-4 mt-2">
                  <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href={member.portfolioUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>
                  </a>
                </div>
                
                  
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
