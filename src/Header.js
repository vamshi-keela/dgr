import React from 'react';
import logo from './images/logo.png'; // Update with the actual filename
import clockIcon from './images/clockIcon.png'; // Update with the actual filename
import phoneIcon from './images/phoneIcon.png'; // Update with the actual filename

const Header = () => {
  return (
    <header className="max-w-8xl w-full py-4  bg-white shadow-md flex justify-center ">
      <div className='w-full flex justify-between max-w-6xl px-4 sm:px-8'>

        <div className="flex items-center space-x-4">
          <img src={logo} alt="DGR Logo" className="h-16" />
          <div className="text-gray-700 text-xl font-bold md:block hidden">
            Multispecialty Hospitals
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img src={clockIcon} alt="24/7" className="h-10 w-10" />
          </div>
          <a href="tel:+917646080808" className="flex items-center bg-gray-100 p-2 rounded-full shadow-sm hover:bg-gray-200 transition duration-200">
            <img src={phoneIcon} alt="Phone" className="h-6 w-6 mr-2" />
            <span className="text-gray-700 text-lg font-bold">7646080808</span>
          </a>
        </div>
      </div>

    </header>
  );
}

export default Header;
