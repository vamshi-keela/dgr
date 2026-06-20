import React from 'react';
import familyImage from './images/FamilyImage.png';
import nabhLogo from './images/nabhlogo.png';

const Card = () => {
  return (

    <div className='top-section-container relative flex flex-col  max-w-6xl w-full px-4 sm:px-8 mt-4 sm:mt-8'>
      <div className='top-green-section p-10 bg-gradient-to-r from-teal-900 via-green-500 to-green-700 shadow-lg rounded-3xl text-white h-1/2 z-10  w-full flex justify-center'>
        <div className='text-left w-full max-w-4xl flex justify-between'>
          <div className='top-detail-section leading-7 sm:leading-8 md:leading-9 lg:leading-10'>
            <div className="bg-yellow-300 text-black inline-block px-2 rounded-lg ">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ">COMPLETE CARE FOR</h2>
            </div>
            <h1 className="sm:text-4xl md:text-5xl lg:text-6xl text-3xl text-teal-400 font-extrabold">Heart & Brain:</h1>
            <h3 className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl">ECG, Diabetes, & </h3>
            <h3 className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl text-yellow-300 font-bold">Thyroid Health</h3>
            <img src={nabhLogo} alt="NABH Logo" className="absolute top-8  w-12 h-12 lg:w-16 lg:h-16 sm:right-16 right-8" /></div>
          <div></div>
        </div>

      </div>
      <div className='mid-section absolute z-20'>
        <img src={familyImage} alt="Family" className="family-image" />
        <div className="circle-text flex items-center justify-center border-2 border-black shadow-lg bg-white rounded-full p-2 text-center text-black md:text-lg text-sm  leading-4">
          <span>Restoring <span className="text-green-600 font-bold">Lung & Liver</span> Health with Excellence</span>
        </div>
      </div>
      <div className='bottom-yellow-section h-1/2 p-10 bg-yellow-300 shadow-lg rounded-3xl  w-full flex justify-center'>
        <div className='bottom-detail-section max-w-4xl flex flex-col h-full justify-end '
        >
          <p className="text-lg lg:text-xl">State-of-the-Art Medical Equipment:</p>
          <p className="text-lg lg:text-xl font-semibold">
            Advanced Operating Theater, 16-Slice CT Scanner, ICU Ventilator, Digital Radiography (DR) X-ray,
            and Cutting-Edge Laboratory Facilities <span className="text-lg font-normal">(Treadmill Test-TMT)</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Card;
