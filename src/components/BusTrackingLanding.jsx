import EmailInput from './EmailInput';
import logo from '../assets/firsti.png';

export default function BusTrackingLanding() {
  return (
    <div className="min-h-screen bg-[#151A23] text-white flex flex-col overflow-x-hidden relative">
      <div className="flex flex-col lg:flex-row flex-grow w-full h-full">

        {/* Left Side */}
        <div className="flex flex-col justify-center items-start w-full lg:w-1/2 px-6 md:px-12 lg:px-20 xl:px-28 py-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-transparent bg-clip-text block">
              You'll Never Miss Your
            </span>
            <span className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-transparent bg-clip-text block">
              Bus Again!
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl xl:text-xl mb-10 leading-relaxed max-w-2xl">
            Simplify transportation management on your campus with Ridemap. Our platform provides real-time bus tracking, customizable routes, and automated attendance, ensuring safe, efficient, and organized travel for students and staff.
          </p>

          <div className="w-full max-w-md">
            <EmailInput />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <img 
            src={logo} 
            alt="Ridemap bus tracking on phones" 
            className="w-full h-auto max-h-[90vh] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
