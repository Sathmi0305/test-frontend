import React from 'react';
import { FaEdit } from 'react-icons/fa'; // Import edit icon from react-icons

const PatientDashboard: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-bold">CuraSync</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Our Services</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
        </div>

        {/* Patient Information Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Patient</h2>
            <FaEdit className="text-gray-500 cursor-pointer" />
          </div>
          <div className="mt-4 space-y-2">
            <p><span className="font-medium">Name:</span> Sarah Johnson</p>
            <p><span className="font-medium">DOR:</span> 15 May 1955</p>
            <p><span className="font-medium">Blood Type:</span> A+</p>
            <p><span className="font-medium">Group Number:</span> GRP987654</p>
          </div>
        </div>

        {/* Separation Line */}
        <div className="border-t my-6"></div>

        {/* Timeline Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Timeline</h2>
            <FaEdit className="text-gray-500 cursor-pointer" />
          </div>
          <div className="mt-4 space-y-2">
            <p><span className="font-medium">Height:</span> 5'7" (170 cm)</p>
            <p><span className="font-medium">Weight:</span> 145 lbs (65.8 kg)</p>
            <p><span className="font-medium">BMI:</span> 22.7</p>
            <p><span className="font-medium">Blood Pressure:</span> 120/60 mmHg</p>
            <p><span className="font-medium">Temperature:</span> 98.6°F (37°C)</p>
            <p><span className="font-medium">Pulse Rate:</span> 72 bpm</p>
          </div>
        </div>

        {/* Separation Line */}
        <div className="border-t my-6"></div>

        {/* Emergency Contact Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Emergency Contact</h2>
            <FaEdit className="text-gray-500 cursor-pointer" />
          </div>
          <div className="mt-4 space-y-2">
            <p><span className="font-medium">Name:</span> Michael Johnson</p>
            <p><span className="font-medium">Relation:</span> Spouse</p>
            <p><span className="font-medium">Phone:</span> +1 (555) 876-5432</p>
          </div>
        </div>

        {/* Separation Line */}
        <div className="border-t my-6"></div>

        {/* Allergies Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Allergies</h2>
            <FaEdit className="text-gray-500 cursor-pointer" />
          </div>
          <div className="mt-4 space-y-2">
            <p><span className="bg-red-500 text-white px-2 py-2 rounded">Severe</span> Drug: Penicillin</p>
            <p><span className="bg-white-500 text-black px-2 py-2 rounded">Moderate</span> Food: Peanuts</p>
            <p><span className="bg-black text-white px-2 py-1 rounded">Mild</span> Environmental: Pollen</p>
          </div>
        </div>

        {/* Separation Line */}
        <div className="border-t my-6"></div>

        {/* Last Updated Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Last updated:</h2>
          <p className="mt-2">25 Jan 2025</p>
        </div>

        {/* Separation Line */}
        <div className="border-t my-6"></div>

        {/* Dashboard Access Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Do you want to access your medical tracking Dashboard?</h2>
          <div className="mt-4 flex space-x-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded">Yes</button>
            <button className="bg-green-300 text-gray-700 px-4 py-2 rounded">No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;