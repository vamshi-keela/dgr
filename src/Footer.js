import React from 'react';
import logo from './images/logo.png'; // Update with the actual filename
import phoneIcon from './images/phoneIconFooter.png'; // Update with the actual filename
import emailIcon from './images/mailIcon.png'; // Update with the actual filename
import instagramIcon from './images/InstagramIcon.jpeg'; // Update with the actual filename
import facebookIcon from './images/FacebookIcon.png'; // Update with the actual filename

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-4 sm:mt-8 w-full bg-white p-8">
      <div className="flex items-center mb-4">
        <img src={logo} alt="DGR Logo" className="h-16 mb-4" />

        <div>
          <h2 className="text-lg lg:text-xl font-bold">Address:</h2>
          <p className="text-lg lg:text-xl">9WHJ+6CR, Kurnool - Ongole Main Rd, Ganesh Nagar, Giddalur, Andhra Pradesh 523357</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <img src={phoneIcon} alt="Phone" className="h-6 w-6 mr-2" />
          <span className="text-lg lg:text-xl font-bold">+91 7646080808</span>
        </div>
        <div className="hidden sm:block mx-4">|</div> {/* Divider visible only on small screens and above */}
        <div className="flex items-center">
          <img src={emailIcon} alt="Email" className="h-6 w-6 mr-2" />
          <span className="text-lg lg:text-xl">enquiry@dgrhospitals.com</span>
        </div>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/dgr.hospitals?igsh=MTBwYWJmd2lxZzQzYw==" className="flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm hover:bg-gray-200 transition duration-200">
          <img src={instagramIcon} alt="Instagram" className="h-8 w-8 mr-2" />
          <span className="text-gray-700 text-lg font-bold">Instagram</span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100063701934166&mibextid=LQQJ4d" className="flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm hover:bg-gray-200 transition duration-200">
          <img src={facebookIcon} alt="Facebook" className="h-8 w-9 mr-2" />
          <span className="text-gray-700 text-lg font-bold">Facebook</span>
        </a>
      </div>
    </div>
  );
}


export default Footer;
