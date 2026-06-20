import watermark from './images/logo.png';
import React, { useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXnoqr6b9zT0-V7rtyqw7T1ZnlwPdnwaE",
  authDomain: "dgr-fe.firebaseapp.com",
  projectId: "dgr-fe",
  storageBucket: "dgr-fe.appspot.com",
  messagingSenderId: "288384232312",
  appId: "1:288384232312:web:a17e754b25f6a4ce31368d",
  measurementId: "G-VJH7D748P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



var Form = () => {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [complaint, setComplaint] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "dgr_leads"), {
        name: name,
        mobile: mobile,
        complaint: complaint,
      });
      alert("Your complaint is registered!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error adding document");
    }
  };
  return (
    <div className="w-full flex flex-col items-center mt-4 sm:mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg w-full max-w-2xl"
      >
        <h2 className="text-3xl text-center">REGISTER TO AVAIL</h2>
        <h3 className="text-3xl font-bold mb-6 text-center">FREE OP EXAMINATION</h3>

        <label className="sr-only">Name</label>
        <input
          required
          type="text"
          className="w-full p-4 mb-4 bg-gray-200 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="sr-only">Mobile</label>
        <input
          required
          type="text"
          className="w-full p-4 mb-4 bg-gray-200 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <label className="sr-only">Complaint</label>
        <textarea
          required
          className="w-full p-4 mb-4 bg-gray-200 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600"
          placeholder="Complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="w-full p-4 bg-teal-600 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          SUBMIT
        </button>
      </form>

      <div className="relative bg-white p-8 mt-8 rounded-lg  w-full max-w-8xl flex items-center flex-col">
        <div className="absolute inset-0 h-50 w-50 bg-center opacity-5 bg-auto" style={{ backgroundImage: `url(${watermark})` }}></div>
        <div className='max-w-2xl '>

          <h3 className="text-4xl font-bold mb-4 text-center relative z-10">ABOUT US</h3>
          <p className="text-gray-700 relative z-10">
            <span className="font-bold">DGR Hospitals, established in 2014,</span> is a prominent healthcare institution dedicated to providing top-notch medical services and compassionate care to patients. With an unwavering commitment to excellence and cutting-edge advancements, DGR Hospitals strives to be at the forefront of medical innovations and patient-centric healthcare. The facility boasts state-of-the-art infrastructure, advanced medical technologies, and a team of highly skilled and experienced healthcare professionals.
          </p>
          <p className="text-gray-700 mt-4 relative z-10">
            From general medicine and surgical procedures to specialized disciplines like cardiology, oncology, and neurology, DGR Hospitals offers an extensive array of medical specialties to address the diverse healthcare needs of the community. Prioritizing patient comfort and well-being, the hospital creates a warm and welcoming atmosphere, offering personalized attention to ensure optimal healthcare outcomes.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Form;
