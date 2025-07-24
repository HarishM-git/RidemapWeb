import { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsValid(valid);
    
    if (valid) {
      console.log('Submitted email:', email);
      // Handle form submission here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={`w-full px-5 py-3 pr-28 text-gray-800 border bg-[#1F242C] text-white ${
            isValid ? 'border-gray-300' : 'border-red-400'
          } rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent`}
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-2 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200 bg-[#010718]"
        >
          Get Access
        </button>
      </div>
      {!isValid && (
        <p className="mt-2 ml-4 text-sm text-red-500">Please enter a valid email address</p>
      )}
    </form>
  );
};

export default EmailInput;