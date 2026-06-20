import React from 'react';
import DoctorPic from './images/DoctorPic.png';
import HealthIcon from './images/HealthLogo.png';

const MissionCard = () => {
  return (
    <div className="flex justify-center mt-8 w-full px-4 sm:px-8 max-w-4xl">
      <div className="bg-gradient-to-r from-cyan-950 via-green-500 to-green-900 text-white rounded-3xl shadow-lg  flex md:flex-row flex-col-reverse md:h-[344px] relative w-full mx-auto">
        <div className="flex-shrink-0 relative">
          <img src={DoctorPic} alt="Person" className="relative absolute md:bottom-14 left-2 max-w-full rounded-lg " style={{ height: '400px', marginLeft: '30px' }} />
          <img src={HealthIcon} alt="Shield Icon" className="absolute -bottom-2 -left-8 h-50 w-50" />
        </div>
        <div className="flex flex-col items-start w-full pl-2 mt-6">
          <p className="text-white sm:text-base md:text-lg lg:text-xl leading-snug p-4 md:p-2">
            Guided by the mission to promote wellness, prevent ailments, and enhance quality of life,
            <span className="font-bold"> DGR Hospitals stands as a trusted healthcare provider,</span> dedicated to delivering exceptional medical care with empathy, integrity, and professionalism.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionCard;
