import React from 'react';
import { FaStar } from 'react-icons/fa';

// Dummy data for testimonials - we'll duplicate this for the infinite scroll
const testimonialsData = [
  {
    name: 'Malarkkan S',
    source: 'Play Store',
    rating: 4.5,
    text: "RideMap keeps my keeps my journey seamless. The user-friendly interface and built-in map feature make planning my routes a breeze. Highly recommended!",
  },
  {
    name: 'Mrs. Shanthi',
    source: 'Play Store',
    rating: 4.5,
    text: "Very professional system. We use RideMap daily and it's made our internal communication better between drivers, students, and management.",
  },
  {
    name: 'Karthik R',
    source: 'Play Store',
    rating: 4.5,
    text: "No more standing and waiting for the bus! I can now check the exact location and plan my time better. The app is clean, easy to use, and works smoothly.",
  },
  {
    name: 'Aishwarya S',
    source: 'Play Store',
    rating: 4.5,
    text: "RideMap has completely changed how I travel to college. I can check exactly where my bus is and reach the stop just on time. No more long waits or confusion – it's super helpful every day!",
  },
  {
    name: 'Divya M',
    source: 'Play Store',
    rating: 4.5,
    text: "RideMap has become a part of my daily routine. I can reach the stop right when the bus arrives. Simple, smart, and very useful.",
  },
  {
    name: 'Another User',
    source: 'Play Store',
    rating: 4.5,
    text: "RideMap makes my daily commute smoother and more predictable. I can leave home at the right time by checking the bus location. It's simple, reliable, and works perfectly even on busy days",
  },
];

// Single Testimonial Card Component
const TestimonialCard = ({ name, source, rating, text }) => (
  <div className="bg-[var(--brand-light)] p-6 rounded-2xl w-full flex-shrink-0">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-gray-600 flex-shrink-0"></div>
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

// Main Testimonials Component with Infinite Scroll
const Testimonials = () => {
  // We duplicate the testimonials to create a seamless loop
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <div className="bg-[var(--brand-dark)] w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-transparent bg-clip-text block bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
            What Our Users Are Saying
          </h1>
          <p className="text-lg text-gray-400">
            Try our Ridemap today and see the difference it can make for your campus transportation system
          </p>
        </div>

        {/* 
          Main container for the scrolling columns. 
          - `mask-image` creates the fade-out effect at the top and bottom.
          - `max-md:flex-col` stacks columns on mobile.
        */}
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