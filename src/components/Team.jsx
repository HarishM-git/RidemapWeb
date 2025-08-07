import React from 'react';
import hari from '../assets/H.png';
import D1 from '../assets/Direc/D1.jpg';
import V1 from '../assets/Direc/V1.jpg';
import M1 from '../assets/Direc/M1.jpg';


const teamMembers = [
  {
    name: 'DHANASEKARAN',
    title: 'Chairman',
    description: 'Honorable Chairman with a Vision for Excellence',
    image: D1, 
  },
  {
    name: 'Dr.S.Malarkkan',
    title: 'Principal',
    description: 'Honorable Principal with a Vision for Excellence',
    image: M1, 
  },
  {
    name: 'Dr. R. Valli',
    title: 'CTO',
    description: 'Visionary CTO With A Passion For Driving Innovation',
    image: V1, 
  },
  {
    name: 'Mr. K. Manojkumar',
    title: 'CEO',
    description: 'Visionary CEO With A Passion For Driving Innovation',
    image: hari, 
  },
];

const Team = () => {
  return (
    <section className="bg-[#151a23] p-8 sm:p-12 w-[80%] mx-auto">
      <div className="container mx-auto">
        {/* Grid container for the cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:grid-cols-4 gap-8">
          
          {/* Map through team members to create a card for each */}
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group"
            >
              {/* Image container */}
              <div className="relative w-full">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`Portrait of ${member.name}`} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Info box positioned over the image */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-[90%] bg-[#1F242C] p-4 rounded-lg shadow-xl transition-transform duration-300 ease-in-out group-hover:translate-y-2">
                  <h3 className="text-white text-[15px] font-bold">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 font-bold text-[12px] uppercase">
                    {member.title}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Team;