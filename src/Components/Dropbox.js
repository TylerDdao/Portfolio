import React, { useState } from 'react';
import Navbar from './Navbar';
function ResponsiveDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown on small screens
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to open/close dropdown (visible only on small screens) */}
      <div className={`${isOpen ? 'bg-gray-800' : 'bg-white'}`}> 
        <button onClick={toggleDropdown} className="p-5">
          <svg className=" h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={`${isOpen ? 'white' : 'black'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} absolute top-10 w-full`}>
        <Navbar/>
      </div>
    </div>
  );
}

export default ResponsiveDropdown;
