import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiStar, FiCircle, FiArrowRight, FiCpu, FiAward, FiShield } from 'react-icons/fi';
import { FaGem, FaCog } from 'react-icons/fa';

// Individual Pricing Card Component
const PricingCard = ({ plan, billingCycle }) => {
  const { name, description, price, features, popular, icon } = plan;
  const currentPrice = price[billingCycle];

  // Animation variants remain the same
  const numberVariants = {
    initial: { y: -25, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 25, opacity: 0 },
  };

  return (
    <div className={`relative ${popular ? 'bg-gradient-to-r from-[#A7E92F] to-[#32C766] p-[2px]' : 'bg-gray-800'} rounded-2xl w-full max-w-sm transition-transform duration-300 hover:scale-105`}>
      {popular ? (
        <div className="bg-[#151A23] rounded-2xl p-6 h-full">
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <span className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-black text-sm font-bold px-4 py-1 rounded-full">
              Popular
            </span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] p-2 rounded-full">
              <div className="text-black text-xl">{icon}</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{name}</h3>
            </div>
          </div>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">{description}</p>
          
          {/* Price section */}
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-4xl font-bold bg-gradient-to-r from-[#A7E92F] to-[#32C766] bg-clip-text text-transparent">₹</span>
            
            <div className="relative flex justify-center items-center h-10 w-10 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentPrice}
                        variants={numberVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute text-4xl font-bold bg-gradient-to-r from-[#A7E92F] to-[#32C766] bg-clip-text text-transparent"
                    >
                        {currentPrice}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="text-gray-400 text-sm ml-1"> / student / day</span>
          </div>
          
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
            <FiCheck className="text-[#A7E92F] text-lg flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
            <a href="#contact">
          <button className="w-full bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
            Contact Us <FiArrowRight />
          </button>

            </a>
        </div>
      ) : (
        <div className="bg-[#151A23] border-2 border-gray-600 rounded-2xl p-6 h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-[#A7E92F] to-[#32C766] p-2 rounded-full">
              <div className="text-black text-xl">{icon}</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{name}</h3>
            </div>
          </div>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">{description}</p>
          
          {/* Price section */}
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-4xl font-bold bg-gradient-to-r from-[#A7E92F] to-[#32C766] bg-clip-text text-transparent">₹</span>
            
            <div className="relative flex justify-center items-center h-10 w-10 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentPrice}
                        variants={numberVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute text-4xl font-bold bg-gradient-to-r from-[#A7E92F] to-[#32C766] bg-clip-text text-transparent"
                    >
                        {currentPrice}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="text-gray-400 text-sm ml-1"> / student / day</span>
          </div>
          
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <FiCheck className="text-[#A7E92F] text-lg flex-shrink-0" />

                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

            <a href="#contact">
                  <button className="w-full bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
                Contact Us <FiArrowRight />
              </button>
            </a>
          
        </div>
      )}
    </div>
  );
};

// Main Pricing Component
const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Standard Plan',
      description: 'Smarter routes, safer rides, better control.',
      price: { monthly: 50, yearly: 10 },
      features: ['Live GPS Tracking', 'Android & iOS App Access', 'Admin Dashboard', '12-Month SIM Data', 'Email Support'],
      popular: false,
      icon: <FaCog />
    },
    {
      name: 'Essential Plan',
      description: 'Start smart. Track every ride with ease.',
      price: { monthly: 1, yearly: 0 },
      features: ['Live GPS Tracking', 'Android & iOS App Access', 'Admin Dashboard', '12-Month SIM Data', 'Email Support'],
      popular: true,
      icon: <FiStar />
    },
    {
      name: 'Premium Plan',
      description: 'Complete transport intelligence for your campus.',
      price: { monthly: 1, yearly: 0 },
      features: ['Live GPS Tracking', 'Android & iOS App Access', 'Admin Dashboard', '12-Month SIM Data', 'Email Support'],
      popular: false,
      icon: <FaGem />
    },
  ];

  return (
    <div className=" min-h-screen w-full text-white font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-transparent bg-clip-text block">
            Pricing Plans
          </h1>
          <p className="text-lg text-gray-300">
            Pick The Perfect Plan For Your Needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className=" p-1 rounded-full flex items-center border border-gray-600">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-black' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${billingCycle === 'yearly' ? 'bg-gradient-to-r from-[#A7E92F] to-[#32C766] text-black' : 'text-gray-400 hover:text-white'}`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>

         {/* Footer Guarantees */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-[#A7E92F] to-[#32C766] rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-black">0%</span>
              </div>
            </div>
            <span className="text-lg font-semibold text-white">Zero Capital Investment</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-[#A7E92F] to-[#32C766] rounded-full flex items-center justify-center">
              <FiShield className="text-2xl text-black" />
            </div>
            <span className="text-lg font-semibold text-white">Life Time Device Replacement Warranty</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;