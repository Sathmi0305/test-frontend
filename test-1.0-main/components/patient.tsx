import React from 'react';

const PatientDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">CuraSync</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Our Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Patient</h2>
          <p className="text-gray-600">Sarah Johnson</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Vital Statistics</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Height:</span> 57" (170 cm)</p>
              <p><span className="font-medium">Weight:</span> 145lb (65.8 kg)</p>
              <p><span className="font-medium">BMI:</span> 22.7</p>
              <p><span className="font-medium">Blood Pressure:</span> 120/80 mmHg</p>
              <p><span className="font-medium">Temperature:</span> 98.6°F (37°C)</p>
              <p><span className="font-medium">Pulse Rate:</span> 72 bpm</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">Emergency Contact</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> Michael Johnson</p>
              <p><span className="font-medium">Relation:</span> Spouse</p>
              <p><span className="font-medium">Phone:</span> +1 (555) 876-5432</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Allergies</h3>
          <div className="space-y-2">
            <p><span className="font-medium">Severe:</span> Drug: Penicillin</p>
            <p><span className="font-medium">Moderate:</span> Food: Peanuts</p>
            <p><span className="font-medium">Wild:</span> Environmental: Pollen</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">Current Medications</h3>
          <div className="space-y-2">
            <p><span className="font-medium">Albuterol Inhaler:</span> Dosage: 2 puffs as needed, Frequency: Every 4-6 hours</p>
            <p><span className="font-medium">Zyrtec:</span> Dosage: 10mg, Frequency: Once daily</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;