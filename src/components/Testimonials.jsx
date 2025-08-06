import React from 'react';
import { FaStar } from 'react-icons/fa';

// Dummy data updated with an `imageUrl` field.
// Using `null` for some to demonstrate the fallback behavior.
const testimonialsData = [
  {
    name: 'Malarkkan S',
    source: 'Play Store',
    rating: 4.5,
    text: "RideMap keeps my keeps my journey seamless. The user-friendly interface and built-in map feature make planning my routes a breeze. Highly recommended!",
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Mrs. Shanthi',
    source: 'Play Store',
    rating: 4.5,
    text: "Very professional system. We use RideMap daily and it's made our internal communication better between drivers, students, and management.",
    imageUrl: null, // This will trigger the fallback
  },
  {
    name: 'Karthik R',
    source: 'Play Store',
    rating: 4.5,
    text: "No more standing and waiting for the bus! I can now check the exact location and plan my time better. The app is clean, easy to use, and works smoothly.",
    imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Aishwarya S',
    source: 'Play Store',
    rating: 4.5,
    text: "RideMap has completely changed how I travel to college. I can check exactly where my bus is and reach the stop just on time. No more long waits or confusion – it's super helpful every day!",
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Divya M',
    source: 'Play Store',
    rating: 4.5,
    text: "RideMap has become a part of my daily routine. I can reach the stop right when the bus arrives. Simple, smart, and very useful.",
    imageUrl: null, // This will also trigger the fallback
  },
  {
    name: 'Another User',
    source: 'Play Store',
    rating: 4.5,
    text: "RideMap makes my daily commute smoother and more predictable. I can leave home at the right time by checking the bus location. It's simple, reliable, and works perfectly even on busy days",
    imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

// Single Testimonial Card Component - MODIFIED
const TestimonialCard = ({ name, source, rating, text, imageUrl }) => {

  // Helper function to get initials from a name
  const getInitials = (nameStr) => {
    const parts = nameStr.split(' ');
    let initials = parts[0] ? parts[0][0] : '';
    if (parts.length > 1 && parts[parts.length - 1]) {
      initials += parts[parts.length - 1][0];
    }
    return initials.toUpperCase();
  };
  
  return (
    <div className="bg-[var(--brand-light)] p-6 rounded-2xl w-full flex-shrink-0">
      <div className="flex items-start gap-4">
        {/* === CHANGE IS HERE === */}
        {/* Conditionally render the image or a fallback div with initials */}
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Profile of ${name}`}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{getInitials(name)}</span>
          </div>
        )}
        {/* === END OF CHANGE === */}
        
        <div className="flex flex-col">
          <p className="font-bold text-white">{name}</p>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <FaStar className="text-yellow-400" />
            <span>{rating} from {source}</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-300">
        “{text}”
      </p>
    </div>
  );
};

// Main Testimonials Component (No changes needed here)
const Testimonials = () => {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <div className="bg-[var(--brand-dark)] w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-[-50px]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] pt-2 pb-4">
            What Our Users Are Saying
          </h1>
          <p className="text-lg text-gray-400">
            Try our Ridemap today and see the difference it can make for your campus transportation system
          </p>
        </div>

        {/* Main container for the scrolling columns */}
        <div 
          className="relative grid h-[600px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        >
          {/* Column 1 */}
          <div className="animate-[scroll-vertical_40s_linear_infinite] space-y-8">
            {duplicatedTestimonials.map((review, index) => (
              <TestimonialCard key={index} {...review} />
            ))}
          </div>

          {/* Column 2 (reverse scroll and slower, hidden on medium screens) */}
          <div className="animate-[scroll-vertical_60s_linear_infinite_reverse] space-y-8 max-lg:hidden">
            {duplicatedTestimonials.slice().reverse().map((review, index) => (
              <TestimonialCard key={index} {...review} />
            ))}
          </div>
          
          {/* Column 3 (hidden on small screens) */}
          <div className="animate-[scroll-vertical_35s_linear_infinite] space-y-8 max-md:hidden">
            {duplicatedTestimonials.map((review, index) => (
              <TestimonialCard key={index} {...review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
