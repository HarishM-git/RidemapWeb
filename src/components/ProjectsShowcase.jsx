import { useState } from 'react';
import cont from '../assets/cont.png';  
import par from '../assets/ctPhoto.png';  

// --- Data for our projects ---
// Component is fully dynamic. Add a new project object here,
// and a new button will automatically appear.
const projectsData = {
  'Lucas TVS': [
    cont, // Replace with your actual image paths in the /public folder
    cont,
    cont,
    cont,
    cont,
  ],
  'Parkwheels': [
    par,
    par,
    par,
    par,
    par,
  ],
  'PrintA4': [
    par,
    par,
    par,
    par,
    par,
  ],
  
};

// --- Final, corrected positions and rotations for each photo card ---
// These values are now perfectly aligned with the new, accurate SVG path below.
const photoCardStyles = [
  // Card 1: On the first upslope, tilted left
  { left: '12%', top: '35%', rotate: '-8deg' },
  // Card 2: On the first downslope, tilted right
  { left: '30%', top: '35%', rotate: '5deg' },
  // Card 3: At the very top of the central peak, slightly tilted left
  { left: '50%', top: '40%', rotate: '-3deg' },
  // Card 4: On the second downslope, tilted right
  { left: '70%', top: '46%', rotate: '7deg' },
  // Card 5: Near the third peak, tilted left
  { left: '90%', top: '45%', rotate: '-10deg' },
];

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState('Lucas TVS');

  // Get images for the currently selected project, max 5 for display
  const projectImages = projectsData[selectedProject] ? projectsData[selectedProject].slice(0, 5) : [];

  return (
    <div className="bg-[#151a23] flex flex-col items-center justify-center min-h-screen text-white p-4 sm:p-8 overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col items-center">
        
        {/* --- Header Text --- */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          We've successfully completed our recent projects with great results! 🎉
        </h1>

        {/* --- Dynamic Project Selector Buttons --- */}
        <div className="flex justify-center items-center flex-wrap gap-4 mb-8 md:mb-12">
          {Object.keys(projectsData).map((project) => (
            <button
              key={project}
              onClick={() => setSelectedProject(project)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-300 border-2 ${
                selectedProject === project
                  ? 'bg-lime-400 text-black border-lime-400'
                  : 'bg-transparent border-gray-600 hover:bg-gray-800 hover:border-gray-500'
              }`}
            >
              <span className={selectedProject === project ? 'text-green-800' : 'text-lime-300'}>✦</span>
              <span>{project}</span>
            </button>
          ))}
        </div>

        {/* --- Photos and Wave Container --- */}
        <div className="relative w-full aspect-[2.5/1] max-w-full mx-auto">
  {/* Green Wavy Line (SVG) - Full width, thinner stroke, smooth curve */}
  <svg
    className="absolute top-0 left-0 w-full h-[44%]"
    viewBox="0 0 1200 200"
    preserveAspectRatio="none"
  >
    <path
      d="M0,100 Q300,40 600,100 Q900,160 1200,100"
      fill="none"
      stroke="#A3E635"
      strokeWidth="12" 
      strokeLinecap="round"
    />
  </svg>

  {/* Photo Cards - 3 on mobile, all on md+ */}
  {/* && window.innerWidth < 768 ? 3 : projectImages.length */}
   {/*use the above code for 3 photot ok  */}
  {projectImages
    .slice(0,projectImages.length)
    .map((image, index) => {
      const style = photoCardStyles[index];
      if (!style) return null;

      return (
        <div
          key={index}
          className="absolute w-[18%] sm:w-[16%] md:w-[15%] transform"
          style={{
            left: style.left,
            top: style.top,
            transform: `translate(-50%, -50%) rotate(${style.rotate})`,
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-4 h-4 bg-black rounded-full border-2 border-gray-800"></div>
          <div className="bg-white p-1.5 sm:p-2 shadow-2xl rounded-sm">
            <div className="bg-gray-300 w-full aspect-square rounded-sm">
              <img src={image} alt={`${selectedProject} view ${index + 1}`} className="w-full h-full object-cover rounded-sm" />
            </div>
          </div>
        </div>
      );
    })}

  {/* "On site" Badge */}
  <div className="absolute bottom-[20%] right-[10%] md:bottom-[25%] md:right-[15%] flex items-center space-x-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
    <div className="bg-lime-400 text-black px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
      On site
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ProjectsShowcase;