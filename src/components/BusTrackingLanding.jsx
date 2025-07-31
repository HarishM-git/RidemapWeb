import EmailInput from './EmailInput';
import logo from '../assets/firsti.png';

export default function BusTrackingLanding() {
  return (
    <div className="min-h-screen bg-[var(--brand-dark)] text-white flex flex-col overflow-x-hidden relative">
      <div className="flex flex-col lg:flex-row flex-grow w-full h-full items-center">

        {/* Left Side */}
        <div className="flex flex-col justify-center items-start w-full lg:w-1/2 px-6 md:px-12 lg:px-20 xl:px-28 py-16 lg:pt-0">
          
          {/* MODIFIED: Using .animate-slideInUp and inline styles for staggering */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-slideInUp"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-transparent bg-clip-text block">
              You'll Never Miss
            </span>
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-transparent bg-clip-text block">
              Your Bus Again!
            </span>
          </h1>

          {/* MODIFIED: Using .animate-slideInUp and inline styles for staggering */}
          <p 
            className="text-gray-400 text-lg sm:text-xl mb-12 leading-relaxed max-w-xl animate-slideInUp"
            style={{ opacity: 0, animationDelay: '400ms' }}
          >
            Simplify transportation management on your campus with Ridemap. Our platform provides real-time bus tracking, customizable routes, and automated attendance, ensuring safe, efficient, and organized travel.
          </p>
          
          {/* MODIFIED: Using .animate-slideInUp and inline styles for staggering */}
          <div 
            className="w-full max-w-md animate-slideInUp"
            style={{ opacity: 0, animationDelay: '600ms' }}
          >
            <EmailInput />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-0">
          {/* MODIFIED: Using .animate-slideInRight and the new .animate-subtleFloat */}
          <img 
            src={logo} 
            alt="Ridemap bus tracking on phones" 
            className="w-full h-auto max-w-none lg:max-w-2xl object-contain transition-transform duration-300 hover:scale-105 animate-slideInRight animate-subtleFloat"
            style={{ opacity: 0, animationDelay: '300ms' }}
          />
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* MODIFIED: Using .animate-blob and inline styles for timing variations */}
        <div 
          className="absolute -top-20 -left-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-blob"
          style={{ animationDuration: '25s' }}
        ></div>
        <div 
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-blob"
          style={{ animationDuration: '20s', animationDelay: '5s' }}
        ></div>
      </div>
    </div>
  );
}