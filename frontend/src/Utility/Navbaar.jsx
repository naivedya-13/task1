import React, { useState } from 'react';
import { FiSearch, FiBell, FiMoon, FiSun, FiUser, FiMessageSquare } from 'react-icons/fi';

function Navbaar() {
  const [text, setText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu toggle

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <div
      className={`max-w-screen h-16 flex justify-between items-center p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md rounded-sm`}
    >
      {/* Left: Search Input with Icon */}
      <div className='flex items-center gap-2'>
        <FiSearch className='text-gray-600 m-3' />
        <input
          type='text'
          placeholder='Type to search...'
          className={`p-2 focus:outline-none ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <FiSun className="text-gray-600 text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      </div>

      {/* Right: Icons and Profile */}
      <div className={`flex items-center gap-4 ${isMobileMenuOpen ? 'flex-col absolute top-16 right-0 bg-white w-full p-4 shadow-md' : 'md:flex'}`}>
        {/* Dark Mode Icon */}
        <div
          onClick={toggleDarkMode}
          className={`w-8 h-4 flex items-center rounded-full cursor-pointer ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
        >
          <div
            className={`w-4 h-4 rounded-full transition-all duration-300 ${darkMode ? 'bg-yellow-300 ml-4' : 'bg-gray-700'}`}
          ></div>
        </div>

        {/* Notification Icon */}
        <div className='relative'>
          <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center'>
            <FiBell className='text-gray-600 text-xl cursor-pointer hover:text-gray-800' title="Notifications" />
          </div>
          <span className='absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full'></span>
        </div>

        {/* Comment Icon */}
        <div className='relative'>
          <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center'>
            <FiMessageSquare className='text-gray-600 text-xl cursor-pointer hover:text-gray-800' title="Messages" />
          </div>
          <span className='absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full'></span>
        </div>

        {/* Profile Icon */}
        <div className='flex items-center gap-2'>
          <div className='flex flex-col text-sm'>
            <span className={`${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>John Doe</span>
            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>UI Design</span>
          </div>
          <FiUser className='text-gray-600 text-3xl border-2 border-gray-400 rounded-full p-1' />
        </div>
      </div>
    </div>
  );
}

export default Navbaar;
