import React from 'react';
import DiseasesImage from './images/Diseases.png';
import DiseasesImageBig from './images/DiseasesBig.png';

const specialists = [
  {
    name: "DR. D. HARINATH REDDY",
    specialization: "(MD General Medicine | physician & diabetologist)",
    bgColor: "bg-green-600",
    subBgColor: "bg-yellow-300",
    fontColor: "text-white",
    subFontColor: "text-black"
  },
  {
    name: "DR. K. N. SANDEEP",
    specialization: "(MS Orthopedics)",
    bgColor: "bg-yellow-300",
    subBgColor: "bg-gray-600",
    fontColor: "text-black",
    subFontColor: "text-white"
  },
  {
    name: "DR. B. V. KIRAN KUMAR",
    specialization: "(MS General and Laparoscopic Surgery)",
    bgColor: "bg-teal-600",
    subBgColor: "bg-yellow-300",
    fontColor: "text-white",
    subFontColor: "text-black"
  }
];

const Specialists = () => {
  return (
    <div className="flex flex-col items-center mt-8 w-full">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">OUR SPECIALISTS:</h2>
      {specialists.map((doctor, index) => (
        <div key={index} className="mb-6 w-full max-w-xl px-8">
          <div className={`flex items-center justify-center rounded-xl p-4 ${doctor.fontColor} font-bold lg:text-3xl md:text-2xl sm:texl-xl text-lg ${doctor.bgColor}`}>
            {doctor.name}
          </div>
          <div className="flex justify-center">
            <div className={`inline-block text-xs sm:text-sm md:text-base lg:text-lg max-w-3/5 justify-center rounded-xl py-1 px-2 -mt-4 ${doctor.subFontColor} font-medium ${doctor.subBgColor}`} >
              {doctor.specialization}
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center flex-col items-center mt-8 w-full bg-gray-100">
        <div className="mb-3 p-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:texl-5xl font-bold text-center uppercase">Discover Our</h1>
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:texl-5xl font-bold text-center uppercase">Expert Services:</h1>
        </div>
        <div className="w-full bg-gray-100 rounded-lg">
          <img src={DiseasesImage} alt="Diseases" className="w-full h-auto rounded-lg md:hidden" />
          <img src={DiseasesImageBig} alt="Diseases" className="w-full h-auto rounded-lg hidden md:block" />
        </div>
      </div>
    </div>
  );
}

export default Specialists;
